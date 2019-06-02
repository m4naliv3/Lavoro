import { commsClient } from './comms_client';
import Twilio from 'twilio-chat';
import Cookies from 'js-cookie';
import {store} from '../store';
import {BeginChatSession} from '../actions';

export function startChatSession(){  
  if(store.getState()['ChatStarted']) return null;
  else{
    var chatToken, channel, identity;
    Cookies.set('_sa', '111111111')
    var session = Cookies.get('_sa');
    
    commsClient('/CX/Chat/Pre?sdProjectId=999999').then(data => { 
        var postData = {
          'SessionID': session,
          'ClientID': '23093',
          'ProjectID': data.p,
          'Name': 'Guest', // Maybe get this from SA????
          'Email': 'N/A', // Maybe get this from SA????
          'AgentName': data.an,
          'AgentImage': data.ai,
          'BusinessName': data.bn,
          'CheckForOpenConversation': false
        }
        commsClient('/CX/Chat/Init', 'POST', postData)
        .then(response => {
          chatToken = response.ChatToken;
          channel = response.ChannelSid;
          identity = response.GuestIdentity;
        })
        .then(_ => {
            Twilio.create(chatToken).then(client => {
                console.log(client)
                // push this channel to the store and see if you can still manipulate it
                // call setupchannel and create listeners and actions in there
            });
        });
    })
    store.dispatch(BeginChatSession(chatToken, channel, identity))
  }
}

/*

Twilio.Chat.Client.create(info.ChatToken)
				.then( client => { 
					ChatClient = client;
					ChatClient = client.getSubscribedChannels().then(joinChannel(client, info.ChannelSid));	
				})
			});
		};

		function joinChannel(client, sid) {
			client.getChannelByUniqueName(sid)
			.then(function(channel) {
				IPM_Channel = channel;
				setupChannel(channel);
				CMS.Chat.setState('started', true);
			});
		}

    function setupChannel(channel) {

			channel.on( 'messageAdded', function ( message ) { Chat.printMessage( message.body, getAuthor(message.author)) })
			channel.on('memberLeft', function() { Chat.destroy(true) });
			channel.on('typingStarted', function() { Chat.updateTypingIndicator(true) });
			channel.on('typingEnded', function() { Chat.updateTypingIndicator(false) });

			//print message history
			channel.getMessages(50).then(function (messages) {
				for (var i = 0; i < messages.items.length; i++) {
					var message = messages.items[i];
					if (message.author !== undefined) {
						Chat.printMessage( message.body, getAuthor(message.author) );
					}
				}
			}).then(function(){
				if(IPM_QueueMessages.length > 0){
					for(var i = 0; i < IPM_QueueMessages.length; i++) Chat.send(IPM_QueueMessages[i]);
					IPM_QueueMessages = [];
				}
			}).catch( function ( e ) {
				console.log( "An error while getting the message history", e );
			});
		}
*/ 