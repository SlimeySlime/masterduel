

export default interface Yugioh_Card {
  id: number
  cid: string;
  eng_id: string;
  name: string;
  type: string | null;
  level: string | null;
  attribute: string | null;
  species: string | null;
  atk: string | null;
  def: string | null;
  otherInfos: string | null;
  description: string | null;
  limit: string | null;
  pendulum_scale: string | null;
  pendulum_description: string | null;
  english_name: string | null;
  related_cards: string | null;
  card_pack: string | null;

}
