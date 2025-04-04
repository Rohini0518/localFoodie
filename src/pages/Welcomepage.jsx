import Button from "../components/Button";
import Image from "../components/Image";
import Text from "../components/Text";

function Welcomepage() {
  return (
    <div>
      <h1>Hi this is Welcomepage </h1>
      <Image
        className="rounded-xl width-8"
        src="https://scontent.fbho4-1.fna.fbcdn.net/v/t1.6435-9/87727712_105393567732716_4607430539060707328_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=uH57ULEkvoUQ7kNvwFe1isx&_nc_oc=Adm7K6-8WVH-JuT9UzlUauVtlV0s41NXN9Pcmc5BQMGL95tYxrM8vAqcMM71ky2VYJFHYhKQqn-3Zum22v4HT-l5&_nc_zt=23&_nc_ht=scontent.fbho4-1.fna&_nc_gid=hteIik_paXq7HHMG_k5Lvg&oh=00_AYHkLt7G3VhZhURbMw5-_TEF190a42j_BdSGS1eFEoM_iA&oe=68172754"
      />
      <Text text="Enjoy the food" className="text-red-500" />
      <Button label="Modalu Pedadama" />
    </div>
  );
}

export default Welcomepage;
