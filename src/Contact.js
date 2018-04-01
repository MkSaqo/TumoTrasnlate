import React from 'react';

const Contact = () => (
  <div>
    <div className="con_all">
      <div className="one_con animated flipInY">
        <h1>Contact With Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Repudiandae unde, quibusdam dolor ab mollitia odio suscipit?
        Quibusdam numquam illum, nesciunt earum laboriosam, tenetur,
        accusamus ullam commodi quia repellendus natus odio?</p>
        <ul className="con_imgs">
          <li><img alt="" className="wami" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Map_marker.svg/500px-Map_marker.svg.png" />Halabyan 16, Yerevan, 0038</li>
          <li><img alt="" className="wami" src="https://icon-icons.com/icons2/272/PNG/512/Phone_30029.png" />+374 10 398413</li>
          <li><img alt="" className="wami" src="http://s1.iconbird.com/ico/2013/9/446/w512h5121380376664MetroUIMail.png" />info@tumo.org</li>
        </ul>
      </div>
      <div className="t_form animated flipInX">
        <form>
          <input type="text" name="" placeholder="Name" />
          <input type="text" name="" placeholder="Surname" />
          <input type="email" name="" placeholder="Example@test.com" />
          <button className="btn">SEND</button>
        </form>
      </div>
    </div>
    <div className="ifr">
      <iframe title="my_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1523.788887939134!2d44.47901495785335!3d40.196208969313616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd719b57919b%3A0x6f5b51aee4e64196!2z0KLRg9C80L4!5e0!3m2!1sru!2s!4v1521446140922" className="ifr_fs" allowFullScreen="true"></iframe>
    </div>
  </div>
);

export default Contact;
