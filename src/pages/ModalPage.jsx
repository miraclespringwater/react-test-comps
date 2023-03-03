import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept.</p>
    </Modal>
  );

  return (
    <div>
      <p>
        Lorem qui debitis atque voluptatum non Sed unde
        voluptatem recusandae dicta deleniti! Laboriosam
        asperiores provident eius culpa aut Possimus nesciunt
        incidunt nihil quod officiis quibusdam, temporibus Ut
        dignissimos dolores sint natus nobis, eius Molestias
        alias incidunt dolorum itaque libero aspernatur. Non
        beatae labore architecto voluptas voluptatum.
        Excepturi iure molestias ut nihil corrupti facere.
        Aliquid voluptatem provident adipisci enim nisi Nemo
        harum corporis sunt dolor quidem, quidem expedita Sunt
        voluptas quidem inventore doloremque voluptas. Omnis
        veniam ipsam tenetur consectetur provident atque
        Beatae dolore iste itaque officia possimus cupiditate
        pariatur! Modi laborum perferendis consectetur
        deleniti est Labore amet repellendus quos eveniet
        eveniet! Veniam expedita harum provident vero neque
        corporis, facere. Dicta alias odit quos est cupiditate
        dolorum Sed qui vitae cumque nam iusto suscipit beatae
        Veritatis rem cumque voluptatum laudantium saepe
        doloribus Quidem quam autem esse accusamus maxime
        earum, numquam Nostrum quam blanditiis harum ipsum
        voluptatibus commodi vel sit fugit a Soluta quibusdam
        sit sapiente cupiditate nulla? Aliquam vel delectus
        quia dignissimos unde. Mollitia doloribus fugiat alias
        cupiditate harum Doloribus nobis culpa similique
        iusto.
      </p>

      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
    </div>
  );
};

export default ModalPage;
