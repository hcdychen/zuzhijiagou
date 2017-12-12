Ext.define('org.view.Viewport', {
	extend: 'Ext.Viewport',
	layout: 'border',
	initComponent : function(){ 
    	var me = this;
    	me.items = [{
			xtype: 'panel',
			region: 'center',
			layout: 'fit',
			id: 'drawpanel',
			items: {
	            xtype: 'basedraw',
	            id: 'draw'
	        },
			tbar: [{
				xtype: 'button',
				text: '添加',
				handler: function() {
					me.createTextNode();
				}
			}, {
				xtype: 'button',
				text: '清除',
				handler: function() {
					var draw = Ext.getCmp('draw');
					draw.removeAll();
				}
			}]
		}]
    	me.callParent(arguments); 
	},
	createTextNode: function(sprite) {
		var draw = Ext.getCmp('draw');
		var s = [
			{type:'node',x:30,y: 30,width:80,height:30,text:'节点1',fontSize:14,bgColor:'#cfdff6',level:2},
			{type:'node',x: 130,y: 130,width: 80,height: 30,text:'节点2',fontSize: 14,bgColor: '#cfdff6',level:4},
		];
		var s1 = {
			level: 1,
			text: 'A1',
			children: [{
				level: 2,
				text: 'B1',
				children: [{
					level: 3,
					text: 'C1',
					children: [{
						level: 4,
						text: 'D1'
					}, {
						level: 4,
						text: 'D2'
					}]
				}, {
					level: 3,
					text: 'C2',
					children: [{
						level: 4,
						text: 'D3',
						children: [{
							level: 5,
							text: 'E1'
						}]
					}]
				}, {
					level: 3,
					text: 'C3',
					children: [{
						level: 4,
						text: 'D4'
					}]
				}]
			}, {
				level: 2,
				text: 'B2',
				children: [{
					level: 3,
					text: 'C4',
					children: [{
						level: 4,
						text: 'D5',
						children: [{
							level: 5,
							text: 'E2'
						}]
					}]
				}, {
					level: 3,
					text: 'C5',
					children: [{
						level: 4,
						text: 'D6'
					}, {
						level: 4,
						text: 'D7'
					}]
				}]
			}]
		};
		draw.add(s1);
	}
});