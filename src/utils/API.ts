import { ActionReturn, SendResponse, UserInfo } from "../types/types";

import Languages from "./Languages";
import client from "./AxiosSetup";
import { AnyAaaaRecord } from "dns";

/**
 * Used for sending a message too the api
 * @param {*} name
 * @param {*} message
 * @param {*} uuid
 * @param {*} sessionId
 * @param {*} language
 */
async function sendMessage(params: {
  message: string;
  language: string;
  name?: string;
  uuid?: string;
  sessionId?: string;
}): Promise<SendResponse | undefined> {
  try {
    //Send a request too the endpoint for a response too our message
    const response = await client.post("lex/send", {
      name: params.name,
      message: params.message,
      uuid: params.uuid,
      session_id: params.sessionId,
      language: params.language,
    });

    const response_data: SendResponse = response.data;
    return response_data;
  } catch (e: any) {
    console.log(e.message);
    return;
  }
}

async function updateRecord(params: {
  message: string;
  is_bot: boolean;
  language: string;
  name?: string;
  uuid?: string;
  sessionId?: string;
}): Promise<UserInfo | undefined> {
  try {
    //Send a request too the endpoint for a response too our message
    const response = await client.post("record/update", {
      name: params.name,
      message: params.message,
      is_bot: params.is_bot,
      uuid: params.uuid,
      session_id: params.sessionId,
      language: params.language,
    });

    const response_data: UserInfo = response.data;
    return response_data;
  } catch (e:any) {
    console.log(e.message);
    return;
  }
}

async function endLexSession(params: {
  uuid: string;
  sessionId: string;
}): Promise<SendResponse | undefined> {
  try {
    //Send a request too the endpoint for a response too our message
    const response = await client.post("lex/end", {
      uuid: params.uuid,
      session_id: params.sessionId,
    });

    const response_data: SendResponse = response.data;
    return response_data;
  } catch (e:any) {
    console.log(e.message);
    return;
  }
}

async function actionButton(params: {
  type: string;
  language?: string;
  name?: string;
  uuid?: string;
  sessionId?: string;
}): Promise<ActionReturn | undefined> {
  try {
    //Send a request too the endpoint for a response too our message
    const response = await client.post("action/" + params.type, {
      uuid: params.uuid,
      session_id: params.sessionId,
      language: params.language ? params.language : undefined,
      name: params.name,
    });

    const response_data: ActionReturn = response.data;
    return response_data;
  } catch (e:any) {
    console.log(e.message);
    return;
  }
}

export default { sendMessage,  updateRecord, endLexSession, actionButton };
