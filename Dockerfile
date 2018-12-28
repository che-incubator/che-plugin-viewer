# Copyright (c) 2012-2018 Red Hat, Inc.
#   This program and the accompanying materials are made
#   available under the terms of the Eclipse Public License 2.0
#   which is available at https://www.eclipse.org/legal/epl-2.0/
#   SPDX-License-Identifier: EPL-2.0
#   Contributors:
#       Red Hat, Inc. - initial implementation

FROM centos:7

RUN printf "[nginx]\nname=nginx repo\nbaseurl=http://nginx.org/packages/centos/7/x86_64/\ngpgcheck=0\nenabled=1" > /etc/yum.repos.d/nginx.repo && \
    curl --silent --location https://rpm.nodesource.com/setup_8.x | bash - && \
    curl --silent --location https://dl.yarnpkg.com/rpm/yarn.repo | tee /etc/yum.repos.d/yarn.repo && \
    yum install nginx nodejs yarn -y && \
    yum clean all && \
    sed -i 's/listen[[:space:]]*80;/listen 8080;/' /etc/nginx/conf.d/default.conf

RUN chmod 777 /var/log/nginx && chmod 777 /var/cache/nginx && chmod 777 /var/run && rm -rf /var/log/nginx/* && rm -rf /var/cache/nginx/*
ENV REACT_APP_REGISTRY_URL='https://che-plugin-registry.openshift.io/plugins/index.json'
WORKDIR /opt/che-plugin-viewer
ADD . /opt/che-plugin-viewer
ADD deployment/nginx.conf /etc/nginx/nginx.conf

RUN yarn --production --non-interactive && yarn install && yarn build

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
