import { subMinutes } from "date-fns";

import knex from "../../knex";
import env from "../../env";

export const addIP = async (ipToGet: string) => {
  const ip = ipToGet.toLowerCase();

  const currentIP = await knex<IP>("ips")
    .where({ ip })
    .first();

  if (currentIP) {
    const currentDate = new Date().toISOString();
    await knex<IP>("ips")
      .where({ ip })
      .update({
        created_at: currentDate,
        updated_at: currentDate
      });
  } else {
    await knex<IP>("ips").insert({ ip });
  }

  return ip;
};
export const getIP = async (ip: string) => {
  const cooldownConfig = env.NON_USER_COOLDOWN;
  const matchedIp = await knex<IP>("ips")
    .where({ ip: ip.toLowerCase() })
    .andWhere(
      "created_at",
      ">",
      subMinutes(new Date(), cooldownConfig).toISOString()
    )
    .first();

  return matchedIp;
};
export const clearIPs = async () =>
  knex<IP>("ips")
    .where(
      "created_at",
      "<",
      subMinutes(new Date(), env.NON_USER_COOLDOWN).toISOString()
    )
    .delete();
