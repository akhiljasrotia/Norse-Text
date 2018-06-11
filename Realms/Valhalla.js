import React, { Component } from 'react';
import {
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  OnPress,
  TouchableOpacity,
  Alert,
  ScrollView,
  Button
} from 'react-native';

const {height,width} = Dimensions.get('window');


export default class Valhalla extends React.Component{

  static navigationOptions ={
    header:null
  }

  render()
    {
      return(

          <View style={styles.mainContainer}>
            <ScrollView>
              <View style={styles.header}>
              </View>
              <View style={styles.container1}>
                <Image style={styles.image1} source={{uri:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxQTEhUTExMWFhUXGR0aGBgYGBsbGhoYIB4aHRodGBgaHSggHxolGxoYITEhJSktLi4uGh8zODMsNygtLisBCgoKDg0OGxAQGy0lICUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAJ0BQgMBIgACEQEDEQH/xAAbAAADAQEBAQEAAAAAAAAAAAADBAUCAQYAB//EAEEQAAECBAQEBAQFAwMDAgcAAAECEQADITEEEkFRBSJhcROBkaEyscHwBkJS0eEUYnIjM4KSovFDwhUWU2NzstL/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMABAX/xAAlEQACAwACAwACAgMBAAAAAAAAAQIRIRIxA0FRImETUjJxkRT/2gAMAwEAAhEDEQA/APzCcHUlJLgB/wBo7OdKCwFbRmXUk6PlH1jU4nME6CscntIc1KSEhypmDfUxqTKYpCrkZvNW/l84CvDF0gkcxHprB1F1FTHoQdNKdozCHCMz7g9qbx8md+qvUCv/ACGo63gSV1cl+4b3EO4eewICUqfrUQjQx9lB22cWP3sYVxGA2hghTuARvQgDy1jviGgt8vIwKaNdi0mapAZYzAeo7GGxNBDpII13EaxIcVH7xGnSFAug/vGVM2orrQhVw/384l4mQpBdNRuL+YhjDIcOHCrF/wBWlNjBVTS1T6AD79YytMbGL4WeqYpKaZjQFrm1oMhbsTqNILgMomSyBXOkuK6jWM4uTlWpGy1DzBIMC0bTK8Mk1Dg9KCMpU3Ka7R0oIpfzhPEKq4akOlYLoayt2PsYzKATU1jkxJYVuWp99Y+RKu2kYIZA/MryjKUBVb9NvPeFp2LUS2op9KRvD4gWYg7isanQLRz+jDuD5H942pbCobyp6xvPcuPOhjJmPUA/uYFs2HJUzsBuY0vGS02BmK3Pw+kbmSaBB7q/yNfk0C/pGs3nf1jYw6YzTJhqWGwoPQVMGRhkjrAZZUXDMY4qalOhWr2g/oUelKFkj0ETeIPnpr6QaXMWq5YbCOYiUbB67CsGODLWLFNDGcpYMP8Axv2g0uxBu3rFPheFM1BQAHbMnci6kjuA47HeNdFaEAmj/TtaGuF4TMVoZypJyn+5IzAf9rQLwm6gGD8KnZVhYJooVF2/do1masTxMvlCmsawTDyHFh5xX4xhUBS8lUkBQ7EOPJ7dGibh1jKzsTSBGVoaUa0VlI5lA6ChMLAVPeDF81TViT5C3SzRpEkitQ26detYcS0GRKFHbdoKhAf+IFKQQ5Nd4MheZgIV2gqpHJctza9B50EM4uUlyAHyskNsKV7lz5w1w6SAZi1fkFBuou3ZgD5kQosMkP5dTE3JssopAsv9ny/ePo0MNufb+I+g8v2an8EcMlgAdnPn/BjMuTmWQCWdh2EOUCVLapNNgLftG8NhVAjKbBz8z9INnFQot87GrUDdf4gwUCR+XSo/brBcNKrmNTU+v8RziGJDy3DVIfpT5Vh13Qv7NpKc2/QEV9Wj5ZTqGPZveCz0pJUlg4LHQg2pFXBfhiVNlhaJ0xBYhWYAgKpZmpU+kB0ayEJ5DlKz1u0YxLu5ZT61B+vSL+J/Cc7KrLOlrCQ5zJYsz7GJs78P4mW58NKgA5yK03PptANaJy1sUvmy7E27EdIMtLaU6WhdblB5SOlCaekNSyQly5yv/wDrCscXWpi4B+7R1ZBILFy7+WwjmZyL1Iqe+38wdCPr7mMwLTWAZU2UBmHOkdDzAOw6Q/x/C5cVOGmYKH/NKV/+6JODnFC0TB8SFBQ7gvFLETsy8xLkhB8ikEDyBA8oFaZPBOeGBYa79BCS9aABrAP7l4oYoirbROWb9opEV9ja0UT/AJfQR9h/zRjWGpAorv8AQQByTOFTa5v39YFnbQjtDE9FT5wssRUmN+OCm9ff94KlSnehygqI7QBIozPtDaBRf/4z9IlIdC+FxIJqKly4LQ0lZ6xKatvpFGU5Z30+RjSjRkwqRlBVrYdz+wgBw4uKHp/MbxIKfDKXcgkh+pHyjXjFQ1r0APq0J+xjMkNt3EZlqJUzsTR1WfRzoOukcEwOAaD6QZc7KokAFwBDDQ7FJ0kpDKDKFCDcHUGHuF4koyqSWKag9Rb3+cUZGFGJl5XAnS08pP8A6iB+VX9ydDtTR4lyJJlnmDGzHQg6xu1RVdjnG5SFqExAAE1yU3yqB5gehcEee0TcOWcbG31hnEORQmhfpSl/Mj7oBEvMCRdn9jGXQemFVNUCxU9A3Z7dqwlh5oclRIqagAluzj1eCYydyu1beRo/ygKU5klQrlLEf2skftDRXsWb9IPxJCUpSwJzEkFw9CHoNKmp2YawxhpKEjMouCaDVXU9P2hWcP8ASTlqUqAqLXH19XOsHGGypBUdQCH0H/mC+hRrFzkEfAzgFxpEqYFIXW1P4MU1ZFMkBT5gN6a/WAY9QUuboGp5ENCJ+hmq0YGJIzpFASkq6sxb1r5CO4lWdTKsPWFZczkS7uTmPnUfIRVwaA6VLLUzFtg3092EI8Lroal/h2eQCwqH+IxyATOIzSScxDl2BoOg6R9C0b8iaZJ5EvR3PlH02YySAWUo23BoGjcoqIUrYNYu1a07D1j7iM5JWnLoH89B6xT2cJ8pDJzvUlgOgp9IDxVyUJ/S9R1Iilw6Q4KV6BgDer2hbEKrlUad6A0qKsNoEHcgyVRKP4Xk5pygUJUDLVmzeTKH9zt7x6vByPCSiW+bVRGqvsR5b8PYpAnXZ0qCSSADWhru0erwqsyhZ66wzv2Qb0ekJpM/xt5RHxi2GJraVfyVFLEryJWQ/X0jyeK4qSiYOU5kqAIOwsf3gUwpo8yrEtetT3GtIdKBkUwah+V+m0AxMseEjcl/YxRUgVcgO4qafufIEwJOyyVEZJ5k9xBlqZMGxGAUkJW4KSaGoftmAJ8nuIXSl4L0VYLyxWKD0PTKB5AD94WwyYYcF/L5w7QqOKTyE9ImqF4rnDrWfDQHUbVA9SWEDxHA8QkEmUogXUllD1STATSDTYEIsYPJVU9/oIGgvBsNLKi1nN9g1faMxhbGYYpAJuX9uup6RPy1j1OIRLXLKOZ0IBSasSSEZgcrKBKk2Ol7mPOKlVaGi7QslR3DGg8/mYIgnm/xMClDTvB0ls3+JgMyFxLEMuyUmFSowdyUjtBkZGsemkvsfnHZUqgPTeO434ZXZXzEHkp5RCehvYpPk1T/AIj5mDyBlBcXg/hVBP6R9Y3mSxBHaHXQY3ywxh1lDKTQiogmLxgmqClBnDK2egDe19RAEqodmjUtAILinXrCM6UrozPTkVuPv0gMpTLy2Sfh70cfXzh4JUCEqq9Adx16/OBDChebQ3SdMw36QEzSVCWPkHIdrdXhTDLylSg9Q7HWov5iL0xImoexNxsoUI7vTyiN4LKUk0yux6GrHo8NGV2mL5ItU0FGLAQopIBfMw0I29vWCLxxmutkgBnYNrR/R2icEgXDb9uh9IZwrNkJatfLcQWsJ8tCqxgYhCWrd6tA5lc2xISPP4vYQUSLtTXMqg8hqYEgOoBqAfPUwMQ2yY/KlZilLtR/m/tB/idbUFEbEA1NNz8hGAT8KfiUGf8ASj8yveKZwoCQlNmGmml+oiLkdSWk3Mf/AKZPpH0WMqRTNb+4x9E+S+FeL+kRSFJlk1NH0YuBS2l+m8L4Qjw1VYsAa6Xc/wDKGV4RRcJJYVIchI/6tTBsNw1SE/rSsM4FAXf5R1ckeRTDZc3O+UkBinY3+sScalSJoD9O4cRVlYUpSEONy9gL30FffS4cQQQhIJOYLHKgM5VkdPLlrlAJB1vSJL8WO9J0vhRnZggVCXYalxbrWNcP4vMlHJMfkNC3MO73HS8X+DSEoWoC5TR+UixrU6EGhib+LsCAPGCjmJAId3o2/SKwdqmR8i0zjPxIJstSK5nBpZg1d79ImlYUlPMoqULMwBsavV/rE2RK1F2cE7/dIanygLOCWatXJF2Gz06gw+LAJB56k+GgavWlLaRQKAZU5bD/AEnIzWzFTBxrQKpCyMPmQpJLJCxzXYE6AVJYKO1DWOLny2mymK8wrV3VoKUDEn0iLXwvF3rCpneIgJUoqyZcgYJFSyzlcVLJrWgtCmHlXjGDmqTyl6kEkXJAsdwSB6OIdlNpBqsM2npOCdBG0SFMVMGZzUOwUA+W7WrH08M0Gwhmcq0oKkozJJdgyqsdDS46xSbpEoayx+HFBIVMKUk7qskC3uCfSH8bjPFQwCUJQylK+DMLAJIDU1rEGVKUlkl0oIJSCaKL2B1AEO4uZKAMpSkhBSkitQCWZOhYd7xzS7OiPRCwqFKNiT0EbXy5uhdvQN97Q2oIQHCgU00q9DW7jT6GMzZPiLdQYquRWjOkhhZg9IrYlFOWoJQpVQylnmRM5ndSQCkhPWr1ePKTlOSWu/l2j0uLxx8JEhDqUC/KxYMUBzauYj06xO/+H5kqUmyAASDQklgH+Z6iN43XYZxb6JOHFH7/ADjZsrt9Y2lNPWBTSwV2+oh32TQMGsPSk0EIIS5inKTbsI0jIBiPy+cP4WXyjtA5kqiT3+cPyvhHlCS6GXYnOUzf4j6wNKQrOSWyilfvWOYyZzD/ABELDClYUsEUu996Q3oeHYxLHIY5hS5sdNW7RqS2UfLypG8LLPdyNaUMI+jqS1UUVyQtOUg6fwQd3jWGSf8AaUwW7u1xuPYGKPDpIKgOxH7eRjH4sk+FLSohlhykhnADhxvtEVK3Q8lWkkyTLWcztMdtOcfQj5QstCVTkPyhZyE3qSG+sEkpK0KBBC0i7kl3vUnUadYXYzElg0xKnbZYNvveKJaI3+IzjsHLUwBSADlDg0AJL0/US7/3HyRxZKypb84PxPcO3noR5xSmy5pzJCUlSdMi6g/4kDY+XeJ/EEq8F0PoDpykkhh306xSK3s55POicFpzcyubrDuGlhws2IKj0GnsBEidhF1erFn+zB8HOZQC3CRUg1B2Y6dopOFrGDx+Ti9R6PhssqU9iq/RAsPvrFvEILeGj41VJ/Qn9R67DU9AYQ4fjE/ElOZS6ITZ++yRrHquEcLCEp5ipS1OtTM6v/5YMI8+baeneqaIyfw9Lb/bSepck9Sd4+j1K+HLcsthsLDoI7Ev5JfR+Mfh+fGZlkKVcqL+QoKEnf3ih+H8ZLMuYJzpBqKUoHLdXiVjAArIHLMANyfsesUcJgglJQsB0pJd22Jr3p5R1tqtPK26EuK4gGcg0ICWZnY1FKNp7iMJxUxJQhgkjMxq5qpYBLkAuaMNYUxL+Kci3Ty2YtzBJr1yk+cM4mSpEwHOQrMFJUXocqCKsSARlY2GUaGKUugIe4NiZkyYCSgoSxCgpLl7Aj4kkur0baG/xLMzJQgsBnDs9q794W4VMlykuVywKq8MKQQasrIQSApsrMdWtC/G+JeIZdFpQ/5yMzF9NPhOpgxaBOLbEP6TKaKBAIZnLPTmow+2itg+HJlrmFeVZRlCWJKSSAokve400idiMcnIuWgMkzQU1rQn+IxMnTMy2UEpGUbl8iXaEk5SxFVCMFbN8ZJmzVJSq4ALBqCuluYNGuEYZDijJ9zv1a3fsIbkpRLZgwykk3JLDXUvCq1iWwqSDzN+omgdvhDwUspC3bPSTMHhspUpEsN+bKlIT3IFafesSD4RGaXmyl2ezClHLwFOKM+ZkIcJWl0EslrEkjr92g+JlhIAToDTNmABqGL7EeggJUzT6InEEWaKPCcWU4VYFWWo96Jp6CEyOQvpDfAWUhYLsl2AZTkizGjUJO9AaRXyr8SPielD8PSBiJa5QBIfMhvym/lt5wPEcGWZS1LQ6kigcFwHBpcF2uzFMC/B3HxhgoFBIVUEaEuR9R5RYkcZUiYrEKlq8JbqLVYOWffUtEGmnhdOzw840b7rF5SJaJQyKBygPUgqcpd3oCC1bGJGPmJWtakpypJJA2EL4FGZkqJI0Bs726lmZ946KyyVno0cPK5KpgWAo5iQ4qQDcGrVIBGpVSFMOla5HiFYShRIqWDZlEuBRs2wuRu8T/GWiWRnoSUpOrAMS79w7Q1wxapmCmpaozW2YqFrsQ1be0SaaW/SyonIRyjt/wCfcGMrluFdvrBEfAPf2+rwMEsrtFH9J1WAAYfknlHaEEiG5BoOwgyFiEnTqJ8/nDcubRukTJqvhHf5w5ha+kJLoddi+J+IdhHJWFUoFQIYFrs5Owj6d8T9BD+CkuKhnsDr+14K6Gj2cGDIdwHSQBcsaXa1/aDoQnMcpFXIGuVwxNaMTlhjDKzkhZUXLKUASWJDXIDgNR9DeJOGxDKKc5I0uXBLmugBuKPCa0yydNMsTvxAJTJkpEyZVyfhT3OppaJWImzcSVTJhUokhABeqy3KhPRNS3TeAS8MJkyUnPkCpiUhQ0BNSfn5jeKK+GTEywtOKKWRPWwzPRQR+uhW42FIMIxiacpSY9iuE5JYKWStLnp/gdxT6xLw/EQietSQHKdQCxAvXo+1oqYuYZUlKCQtQANTcGo1zWNgXtrSPLzwxcgoOyhYv1uLEd4EFdm8kqPeYPhiZ8vxDVQzZVJLVJAcNT4Uj1MReJpOYtYpBpbP+Y9KiFOB8b8BJSS6SCaaGlOzOY5wXieaeEKLBSCkWuz6dX9YCjK2LyVEsIOZQY0994KkhIPL5AX29YLxjkmhQDAhLttb1cGMYl0kK0Bv96QU+hsPSfh/DhGZcwpBLOSWCRRkh495w/iEiUlQVPkhRcpBWkGwYBzW8fnfE0Z8OSByuFqIZ0pFzWB8X/D6pScS08qSlUsFJAGcLQljY6kWOkRXjU3bZWc+KpLD2p4rLNf6qXX/AO4mPo/O5vBQlRSrEgEEggs4IoQWjkb/AM8P7A/mn/U54+Qiaa5VOx1On/drCCiua65iuUCgPdIZI8wewjXEXMxMkEXAvqd9r67wbFEAsPhHwvt+U0pbIo9ewjrjHLPOb9CImZQUkEHRSSxroeldYo8DU6SCsguCMwJqA1FPdtOkIzZmYgAO5be7n4vNMVsDxEyc6Al0rINQHDaZamhH87CSwaL0WxeFWqYpQQSVkAJSHCqAXYbaiFVp5QUBQSCxB/Ka07fzFySkplpZwXQWBq9Omz+sTsViT4ZDkha6Fv06u9aUtrW1Zwdlp4TlTHA/zeHjOyykvdSlegoSelomSkuUvQPBchmECtdNk1IHfWKUJKRQlJmTE586gAaF7tctYQaXmSciqhSgQdSQXqOtYJg0OUAA8tQ7Cn7P8oKtLhIBfKfcsW2cK23hTJDWLkAK8ZFJiA6joo0cU2Bv+zwfDFNBMUyzUhKCoJBtUUttA2qMv5M5YXJD5lHere20F4hxIy0GTLOVaqkuzDKCW7qzAbN2hI30N5IqrBzeGJUSJc4KOgyLr5gGAcFwy5E0pmBqhXQgH+YPgMeofm8QWY1OXQuPhpvsaWhSXiwrEKVTKo5BtZh/3AQJOTTQsYxTTE+HZpR/2irKop+LUOLMdR7xcOPWMKo5UZFICEkL/NY8pS+ZlGkJcSmLTOdHKCQrM2Yg5Q5y93MM4WRLSmXN8YrmmYuqcqnuKS7MaeUHvWb9HnmoSLC/0h7huGQAtWbOEB+X4SpTgOrUMFCm0LjDqUpSVS3LsUvR9H6AxQwKglMyWpY/1AljYApJOXoKtFWwJGjhZakJyhalBXwJBAPToaG3U6QX8O4PwvHQoEApLZhUpKVt0N9IVVjialU3kHKkIfmAIDkadQ3u8Gk8QUEpE4ZUFhVwlTAO+UOwp1tE2m1Q8XTJeGJyqQdLP97EwtMF+0VcapgVhKMr3TUuxBqalgX6OIQ+Koa1RnSk9GdVfKHXQJ94Jplxf4RwbOkEqYKfK1+56D9oiLcaFtXTp118wYu8KxzqloblKUuxrVWWh2FI03mAhHdJfEMJkUmuYFIUCzXY/uPKOoXlTo530GpMUOIYVUxbJABAfKVDVmSlZYFrdLRGxMpXwkEFuYHTodqt6xk00Zppg5k8GvMz3IGkHkz2q9RUZgQ/Y1B9r6wXhckJJzCgFWBNNSGg+AXLMvKXKis/EE5fDAoFaguBraA9KLAs9E2iUJJBqUEa2BIcEEUp0EAwc05V8jvRRI+Fi6mGhYAeoirgcDMVn8NCzRgXYAXfMSzt10jquDTUqVMmJISpWY5WLquXYuHUHgKqDZPl8JCUIUpagrMCVAsU609IcGCQMv8AqTCFZktmDVxBBCqWKUlXpAuITMyChKVK/UWLN5RKlSyhl5WYuHJbWnvBSk1oZcbVFfEKmhQonKmYyVVzApGZIPUgJ9ozhUpnqWJlm3c1zl33cM/aJ+Ix61JKcrZmN7KFlAbtTtAZC5qVOkB1ZXG5Bp7k66wODo3LbEpmFyZkmuVRCgTdIdj/AD1jAm5VoUgghPZx0I9ekXsZI8NIQ7kpzORzLIASCQ1RmCt/hS9oS4zwxIUFICQlTuHZiDp5ERRTV6K45g1xrD84/SQGfQsD61+sYxX+0hq05tdaQLE4qYt3SXoxtamvSMoWrIUlJAIvqd2Y6RKmUTPQ/ht5spUp7hSOzg6RMxcicUEHFKVm8ChQDUrUhszvymWD1ib/AFi0q/0FqYgWqSd7fSPlY6aCAV1cM4DuFFdNWzEnzgxg07QJeRYjMzg85ZK/FJzHM+W71e8cgX9TMFPEIajZLdI+i2/r/hPkwvB0eJNmLUSCxLs/MqgpcgZtHg8yWSqjNuKJdtH7gntCXDsQRRKTu4UUkaX2Yn1hpc+ozKKdeZmpoBazU6QTlC4g2+IfCz61Ffv6wYTg9qAV1Ku8JrmlSEKcllMXNdCH8g3lGZ2IJcILnfQdvt4nONlYOhufic3JLFHGYvZ6M7uGd/4gfGGCUZdM1NgyQAPeCJwJQkMaULmhNW10AaAcWSAhNdwOupYto49YSNXhSTwmyFgKSFOU6tcjpFXBSVBOahBYG9PPQ94lOy0P0j0sgCckhByTkuAHbMnQKHb3ikiS7FZuKMtNKKWW65Eku3Qn5mHuG8XUlBCDVYKFBi4dZc2Yggg9TQ2iFjCuYRm+IcrGjAadKvDMgSsxzlbZiMySB2UUtbo7/KM40gxabHZ2KUhZUhTKOZ20zKLjrT5wHiJJMskVIUCDdnpf/M+kZWpcpakqSlZSWKakK9DUGhBHRoYljIUk/wC2sg2tX2Ukgjq2xiaVMpJ2ijwhWZK2GUo5SQXJAZikEBiwPnE/H4fKvKKsoNtypf6Q1w1FFknKoLVmIrQOWBOjgB+kHk4MTPBPi8y0lZOUEAspww7HyhOVSZqtI1JmBakTFfCoGp/Vttd9rWFoewEuTL8OZlSn/XUFLoKJztXa0SuHzEKklBLBVgA5dwWYaO4NoWlSs6WNQCQlOieYDlatVKagPnB49i+zeEIm4osynUVM7AgVZ9iWHnHpp/EkKGV2CeVQIAIbRqAjtHjsHMEqZLKal2NWooNo9a+0WsDJKQrOCcynBdX5ksXCS1FGjh6GDOmgxjTJ8xYlzVIQUhBdiXyg9KE1NGbbrBcTi0mWoEAAAAA0KlXb+1IoS1S4faNz8GhaweYMcoAUaVcM77tWBq4VlX4heYhAKyMpCgwJJULOGNHfltSDgPZzA4lJYBJTKb4PzJJoShr0pu1o+xHD5EwhMpSM5+Is4IY1U1i4uLv0gqMVLmIVMU6SkAJDu53fT948/OUyytBKTzGl2Jo8ZRbdp0NdLQ2HlrSKGofIX5Tpym47W3EW+DyEZkibLUpGVjYHNmUQCkFiHNL2ERElYlrIICSAFJpUaEJdn1B3i/hJktSP9NSkkM/Nm9lV8o020GIhj5hWtUxJUlCSUpepygqIFNrPWCcQkZ8PLnqYLJSEgUGUpJIJuo0HMYZThjmUlISE/CFEjKNDa1XoWMDxHDlpQEFlBIUpnv2B2CT6mMvoW10TJmK5cqaOGJ16gdItfh2ShQUtaUllJABACXANf+5PbyiRhsO4fKVXoCAAA3xK8xtFnDYdSZYlnLlUeYGri5r3+kLOqpDx70exGOPwFNTUA6m1dy+lu8YxMwJAIUotvUONaaO4EI+MSoKAfK3No7EMPLSAmfmOVJd6AbkJsInTKqi3LwiJwCylOUFnylz2EK8Uw2HQGDpVtcFNqjSuojuFnkS0KejEsNyfpEXHYzMsF3s+UPQoJKSCKkEkGm8P47bJeVUBnyMjOkkEsndxoerwJU4pNEspOhFX0DHe3nD8iW6SpaiAU1URV0ljlG5UBoLG9oxicOqeTmKhNCUg5tQ6k1Oigz7EaCKOS7EjfQLELVLsiYPCGUBE1gXUTVxmKXOUB3bLvC+JExVHUrKVJYUAS9n6KCt4o8RnTpqghagSmo8PVnDk6AAE71hBGVFZeYNdKlhQVqopLAgtVj1gXljL4aThFpDrlqA0oWPdQ7d4nY7FErMlGtFqFH2SnZP339HIxAXKWlzkUkv96ER5bESlIKSq5SFAjUH63Ebx67ZpusQ3w6UEIzgqEwgigDBi2o6aRnHoSAVUB8iX3fWE8chl0N9uocRk4VQXlJe33WLKPsi36PXyfCKQSkEkAk9Y+jzSeIqSMtaU9KR9EP4n9OvnE5whPKQ1SWHpAcaCSU8oIIQWFwoqLq3LpAfYgaRuXOyBGUG2Yhne5NGFGD384FhEEoVMJqFJUepIU3u0dFNOzzk7GcNLIlKc0IJS9M2Uu46kddDtH0yWUzAlM1xYFQ5btYvTWAfh7EETgjmINAkW3q+lz/Dxa49LQ5UzlQCsx1OpcN3a9Q94EuwonnHksHznZmSLvTWjF9NoVxkslGcqcuE1qWsA52YRtf8A6VBYW1qI62cLSKmpHkSf2hOuinYlMU6l9B+0MYHFMsVyqApsfvaJqTc7iBIW6n3iqiSbPWcQeYfETRY+MMo5lDVIAJ6F6Wq8JyZenVvY/WBcM4uUAoCil7kbABhS9QPsx6XD4WSXcAGhzhZbdwHYEjv2OsptxKwpk3GklKF5qKTlNauklIcXfKB7RzCA5T0JLFhTkZnuTAcfNyjLLyrCHdTGhJNgoCtANapMKSlrmKBUafD2eBQXKi3Nw/hjNQpWHYmig7ivkqnlDkqUpEk4hSk5SVJCUkZgVZmJGwzEwlKxip6SJhKieYHZQYKA6FHuBC+LwJRKLnmEzLQ3SA7+pF4T3TDeWXk4ZKssyQBmSPhoAsCwfRQ3N7dYVQppYSokKAZSSGIW5KgEmynX5BJMLcPxrZUjkIJJOhSBVv7unWHhOlY2q05QHSlSUhxupdOYvWu9DclNjj6GSUnaJU4OSWDhKWHV1NawBZujHeGhj50krQFZU/HooZVOtJSXZ2VbcdY7J4Sl1omLAWFJAEoshTMEkO5zMsF6NA5+CmHMEspySSSzaVFydaPSGtB9gcVilAoQWzZUKLF2JALE6m9I7K4mqWFBNSpOStCEO6r2eiR0ETsFglH4SK8zuzuxerHXaBmUXoX7F/lFKQunq0cVkTpYTOCHH6nBH+Kt22MRcZw5IUTJVmDO2oFDeyvL0haVg5yqpQVjokkeojkuVMCggoUlZIAFUlzQUMCMeLxherTfgOLffaNy1BIIymrelXDOL010j0s2VOXhwVFC9KUbsCbjcAeYpEfFYYoIDEOHZQZTVAJ7s8a/oUl0F4SsKVQEN0CW6PmP1i1isGFMCcqW+JtNebboBWPLSJmRTvrQnQ608helukWv/mIqAzGWoooFEgq0qAQQ8G36JtCmLmeG6c2SWKAj4j1I/S7OkFx10+SQpBS/L/ZmKT3It5to8IY/inipLqfmzOQATRgAw+EVNaUsHqtg5VCU50TG5SFBIZ6kvozVo0HiFSPQ8MEsDK75HICmYqOgy/MxnETUDJzEEK5mTQJbZmNWvqLxCGJmuQpQU36gCfUgmKHD5gaaSiW4krZgWzMWzD19Ynw0qpMYTLSolSQtCFXKqC70zADvCuIlJQVhSmJQSkinNRu4sxhNGJmuwmS5dKlKAC3+VVe8BWlI+KalRVdzVr3UxNW9NYeMKYs52ivh1NLSXpyrZTEZkqZQp8QveocaOYHjp65q1nOJcvNqtlMwcBhUOHr9YmJm5ArnBoWd7EVAHodNbwc5QyUtmZ8xSeY/mIe8CSaNCmwkmSqWlanzhQFmVQPp8QNVF6WFYT/rCVZqAC3MSwZgH1p9Ybl4oJICwC9lCjekfYvhqJgKwojdVAbjQUPnWBGdf5Dy8fuLM4fF/wCmaiqWtdw31g/G0Ay5Bd8rofuAR7gxOnYNcs1GZIZyl3bdrijw0cSlUsgF0pUkvuW09SYMY6mhJSzRSclD6vH01QJKlGlK6ltozi2cn8qanvoITVNKi58hsOkW9El3Y6Zsv9CvURyEs8cgUNyHMVhFGVmSHAoQHJYFifa3WN8DAmeJLLf6hTlOxAVr/wAk+gjHC+JJSFZiQ6qGpYFnU+71jOGxKk8z1BBJainI1tUVfpBt9MhSFlYYy1h7pJcXDirEG9aVivxlRmSkzA2UO1nZVXOtxrvuTHMTOSpXKUlLUUUhz/1WqCTqX6RzDSs8pSCS4dk6A3R3FrwJWMhHNzSAbZRHcCtlmn5vqDAwf9os5b9meDzKTVdWr3FflCMaxDi2HCFqAoHp2NR7QDDoZTnQe8VeOSqIXuG9LexHpExRvFYu0SljO8MS676xXJaYqWlSglgG6KDkesTuHS2Y6lRb2inKljOtZeigPJgz+ghPI9KwHMBhlEzQRQS2bsgqHvXyMSMMWbbMl+0XsHMSlcwkslQ16oYt5mIkkgp3JhY/s0/0VuGKypzAjlUD0vYm1a02BjXGVpUZhzMywAN7newAB8wNITwGIl5fDWop58wI7AeZvTr3ilMEpQFBmDJcZDmDDnOZI5exNRCNJSsKdxoR8bOgjMAAanqSSLDoT5QthcSZb5Re40P89Yal4RIUpyCkugNahqom2jht67RMXIOhh8eGR6DAcVSpBlTSrL8TFioKJoUHd6katXpOViJ8lWUTHGgIoRYdQfcWgfCljxkeJRIOY2/LW5YBzRzvHqMdIlz0lSRzs5FAw1JILW1H6TrCvP8AQyZ51PEZhGUy0O4IKQxAGg0L1vbTSGgpwlSS4Ew8qRdLJKunxZe57GI2JlMtSAcwGvV7P5QSTJYCqqVYE/IQzSQbs9jiMdLKQJiyhNWHhssjYFQJ9A0RcXh85HgyyiWBQqISalySokfYh2XKlyJdMvilj4iqqJOktJoAl6qqo6NYqqBH+6KuXUrMotU20enqISNLoLf0JKxOIzZklBsCQDU0Ymocl3e1zaNGWS5Ws51aqSf/AGvppaBf1iQCVJYilCGoCA3ZzpHEqKglRASkMcyiwcEGpp5AVtGCmTOIYQgAkq6C6bknKQe5qBGJGYIULA+2/tSHuI4rOWFUj8xcFZ3bRLWF4VmoUGBSoA/2m3SHV0K0jfCMCkrcpzgaUYqNEAuGIepGwMOSwlSwUqSQVhyFAkJdjq7lCnI3HWJOCxWQ0JzE1H9oBN93cQ3LnVlslgGIypDkJUxFValJrrcwzJ+x+dKSUqoHSMycqgcqTdJAskKNB5UhXhODXNKspCUAMpRBI7coNSI3w6asrAoEl0u+xTUB2d8pzV9o+Rxc+GmWmhSAnKhOr1NNXq5ibuisRviWN8JJlSiEytioKdRuSCHiQjmzcr9SLFqFI/UGUR2MCmYCeSV5QOqlD1ZzHUrVLBC0pOagUCC529W8nhoJfQeS66J2OUE8yeVi9C6bgiltvWKk/i5mshTDK3c327xG4tMcDzejb39feMJWaK2oex/mKtWicUWJM+uRVmZ+nSGJailzqKEfqHXr1hOTzpB2p6294JhJt0K1sYg4llKivh15gFJozADW4v5UiNiCEFaTQBXKkdS9YbwU6pSrS+/SFuNS3UggcxDH73gePJUaeqxDELOUdSS3akAlhyEuzxrEPlSNiU+tfrGUGri8dJGx0YWX/d6x9ChH9p+/KOxtAaw5SJbKAJUSxezfz5Q9i8YmgEtJ5TQlTOxaytNojyrh9IYmVJMHiSsZwmKALBKWI/MkFidQSL0vB+Hzck1Q6Pd661ieEwSWGUDCyjeDRejGZIy5iKKPo/7QGbiUmYVB8tGpGcYHU/SMITAUDOQ7xKalaAynOgY0hGVL3gkkv0jS0QY1FUZ/lpsFNBUgbRpS1FzZ7/KMmKmHwSRLTNU6s35bAVapufaEkxoonhJYCvSDnh8w1yL8kK/aKImnKrKyGTm5ABq17+8DVNdncukEkly/eBtm5YSZ2EahSUnqCPnGJKFAFi0ejlSVLBddEJNCHBoLvbyiTi0BKiBYM3mAfrGTN2LSpJPxKKmsCSW7CCgsYwkxx4wyw+l4uYiZmlgimhvfygv9dMJUQBLzJynLs4JpZ6bbxyVWMqXtSCMzSJYF6PfcmNeKySEgMoMQoAv+3cQArh7huDEyWqYslklsoLO25/ZoDzWaxWXxCYgZEkZP0qGZPop28mjv/wARWzlMnvl/mKskgAlCEJZm5QpX/UpzBJ09SklSsqgnRSAaVDP5QM+A5EocTmswUhP+KEv6kGFps4q5lEqVuoufe0WMfw5BkeOnlIISUixd6h7Wjz67QyQeRa4XNQrIVTE0DEFQSQxURzGyWOjGCcV4xKJAloQrKXDB3O6lEfD0o8ebCQ9hBSWDxuJihg8KChSytIVRLKITQ1JvX4WbrG0zeZKkmgNSSwopJ9yCf+UTJdYOUgUZ/vaC0FKxqYS9VAhyQkClWFy+0dlgfsHLe0CSrpG5ZiTLKkUMNLr8YHk3zMDm4ckqBGZOo1++ojMie9wCNoYDEBg2zaRPUy+SR5ziGBUASHKN9R/l0rcbRnCSwRXz7RcxU0pY33DXiXiwElKkhgssU6eUdEZuSo5JxUXgLBqKVeGf/I0MMTg4cfELfsIWxCaBWoh/BF66wZL2TT9GZC3yrpW/396w5xCU8p2ZQLk9NfnCUgZVFIs4bo9YsSfgIOob1hGqaYbyjzZTd/58o+EwD4U13ManIZ20jlQl3cHTR46GRTOf1C/1GPoHm7R2BQbP/9k='}}>
                </Image>
                <View style={styles.textBox1}>
                  <Text style={styles.text1}>
                  VALHALLA
                  </Text>
                  <Text style={styles.text2}>
                   Valhalla (Old Norse Valhöll) is located in Asgard, the front of the big city of Asgard there are 540 doors. The doors are so wide that through each huge door, 800 warriors can walk side by side.
                   The roof is covered with golden shields, and the walls around Valhalla are made from wooden spear shafts. This is the place where half of the Vikings who had died in a battle would come for their afterlife.
                    {"\n"}{"\n"}
                   The other half of the Vikings are given to the Goddess Freya; she always has the first choice from every dead warrior.
                   Each and every morning the Vikings in Valhalla will take their weapons and put on their armor and then walk out to the big plains in Asgard and fight.
                   It did not matter if they got their arms, legs or head cut off. Because when the great dinner in the evening came they would all be restored to normal. 
                    {"\n"}{"\n"}
                    In the evening they will return home to Valhalla and sit down and eat and drink. When the cook Andhrimnir cut steaks from the side of the pig Saehrimnir “A giant pig” this is not a normal pig but a magical pig  ,it will grow back immediately.
                    {"\n"}{"\n"}
                    There is also a goat named Heidrun, it’s standing on the roof of Valhalla, and eats from the branches of the tree of life Yggdrasil. While from its udder floats a lot of mead, down to a huge tub, big enough to make everyone in Valhalla drunk every day.
                    The Valkyries will serve the Vikings, pork, and meat.
                  </Text>
                  
              </View>
              </View>
              </ScrollView>

              <View style={styles.container2}>
                <View style={styles.button_holder}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Asgard')}>
                  <View style = { styles.common_button }>
                  <Text style = { styles.button_text }>Go back to Asgard</Text>
                  </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.edge}>
                </View> 
                <View style={styles.button_holder}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Details')}>
                  <View style = { styles.common_button }>
                  <Text style = { styles.button_text }>Back to Homepage</Text>
                  </View>
                  </TouchableOpacity>
                </View>             
            </View> 
            
          </View>

        );
    }
}

const styles = StyleSheet.create(
{
  mainContainer:{
    flex:1,
    backgroundColor:'black',
  },
  header:{
      height:height*0.1,
      backgroundColor:'black',
  },

  image1:{
    width:width,
    height:height*0.3,
  },

  textBox1:{
    marginTop:'10%',
    borderWidth:2,
    margin:10,
    backgroundColor:'black',
  },

  text1:{
    marginTop:10,
    fontWeight:'bold',
    fontSize:25,
    textAlign:'center',
    color:'white',
  },

  text2:{
    margin:10,
    fontSize:20,
    color:'white',
    textAlign:'center',
    marginTop:25,
  },

  container2:{
    flexDirection:'row',
    justifyContent:'space-around',
  },

  edge:{
    height:60,
    width:2,
    backgroundColor:'white',
    alignSelf:'flex-end'
  },

  button_text:
    {
        fontSize: 20,
        color: 'white',
        alignSelf: 'stretch',
        textAlign: 'center',
        alignSelf:'center',
    },

  common_button:
    {
        padding: 10,
        backgroundColor: 'black',
        //borderTopWidth:1,
        borderColor:'white',
    },

    button_holder:
    {
      width:"40%",
    },

});