/* 
   Copyright (c) 2012-2018 Red Hat, Inc.
    This program and the accompanying materials are made
    available under the terms of the Eclipse Public License 2.0
    which is available at https://www.eclipse.org/legal/epl-2.0/
    SPDX-License-Identifier: EPL-2.0
    Contributors:
        Red Hat, Inc. - initial implementation
*/

import axios from 'axios';
import jsyaml from 'js-yaml';
class pluginsApi {
    static async getAllPlugins() {
        let data = [];
            return await axios.get(process.env.REACT_APP_REGISTRY_URL).then(async response => {
            for (let i = 0; i < response.data.length; i++) {
                let url = 'https://che-plugin-registry.openshift.io' + response.data[i].links.self;
                await axios.get(url).then(res => {
                    data.push(jsyaml.load(res.data));
                }).catch(error => {
                    return error;
                });
            }
            return data;
        }).catch(error => {
            return error;
        });
    }
}

export default pluginsApi;
