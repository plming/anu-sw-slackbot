import assert from "assert";
import axios, { AxiosRequestHeaders } from "axios";
import "dotenv/config";
import logger from "./logger";

import { Business } from "./business";
import { Notice } from "./notice";

assert(process.env.SLACK_WEBHOOK_URL !== undefined);

const headers: AxiosRequestHeaders = {
    'Content-type': 'application/json'
}

export async function notifyBusinessAdded(business: Business) {
    const payload = {
        "text": `π ${business.title}`,
        "blocks": [
            {
                "type": "header",
                "text": {
                    "type": "plain_text",
                    "text": `π ${business.title}`
                }
            },
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": `*μ μ²­κΈ°ν:* ${business.applicationEndDate.toLocaleDateString('ko-kr')}\n*μ§μλΆμ:* ${business.department}`
                },
                "accessory": {
                    "type": "button",
                    "text": {
                        "type": "plain_text",
                        "text": "μ μ²­νκΈ°"
                    },
                    "style": "primary",
                    "action_id": "button-action",
                    "url": business.url
                }
            },
            {
                "type": "section",
                "text": {
                    "type": "plain_text",
                    "text": business.bodyText
                }
            }
        ]
    }

    await axios.post(process.env.SLACK_WEBHOOK_URL, payload, headers);
    logger.info(`μ¬λλ°©μ κ²μ μλ£ - μ§μμ¬μ: ${business.title}`);
}

export async function notifyNoticeAdded(notice: Notice) {
    const payload = {
        "text": `π’ ${notice.title}`,
        "blocks": [
            {
                "type": "header",
                "text": {
                    "type": "plain_text",
                    "text": `π’ ${notice.title}`
                }
            },
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": `*μ§μλΆμ:* ${notice.author}`
                },
                "accessory": {
                    "type": "button",
                    "text": {
                        "type": "plain_text",
                        "text": "νμΈνκΈ°"
                    },
                    "style": "primary",
                    "action_id": "button-action",
                    "url": notice.url
                }
            },
            {
                "type": "section",
                "text": {
                    "type": "plain_text",
                    "text": notice.bodyText
                }
            }
        ]
    }

    await axios.post(process.env.SLACK_WEBHOOK_URL, payload, headers);
    logger.info(`μ¬λλ°©μ κ²μ μλ£ - κ³΅μ§μ¬ν­: ${notice.title}`);
}