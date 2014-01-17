/**
 * Shopware 4.0
 * Copyright © 2012 shopware AG
 *
 * According to our dual licensing model, this program can be used either
 * under the terms of the GNU Affero General Public License, version 3,
 * or under a proprietary license.
 *
 * The texts of the GNU Affero General Public License with an additional
 * permission and of our proprietary license can be found at and
 * in the LICENSE file you have received along with this program.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * "Shopware" is a registered trademark of shopware AG.
 * The licensing of the program under the AGPLv3 does not imply a
 * trademark license. Therefore any rights, title and interest in
 * our trademarks remain entirely with us.
 *
 * @category   Shopware
 * @package    Analytics
 * @subpackage Data
 * @copyright  Copyright (c) 2012, shopware AG (http://www.shopware.de)
 * @version    $Id$
 * @author shopware AG
 */

/**
 * todo@all: Documentation
 */
Ext.define('Shopware.apps.Analytics.store.navigation.Visitors', {
    extend: 'Ext.data.Store',
    alias: 'widget.analytics-store-navigation-visitors',
    remoteSort: true,
    fields: [
        'name',
        'totalImpressions',
        'totalVisits',
        { name : 'datum', type: 'date' }
    ],
    proxy: {
        type: 'ajax',
        url: '{url controller=analytics action=getVisitors}',
        reader: {
            type: 'json',
            root: 'data'
        }
    },

    constructor: function(config) {
        var me = this;
        config.fields = me.fields;

        if(config.shopStore) {
            config.shopStore.each(function(shop) {
                config.fields.push('visits' + shop.data.id);
                config.fields.push('impressions' + shop.data.id);
            });
        }

        me.callParent(arguments);
    }
});
