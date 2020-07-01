/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Typography } from "@material-ui/core";
import { useViewportScroll } from "framer-motion";
import { useEffect } from "react";

const Lorem = () => {

  const { scrollYProgress } = useViewportScroll();

  useEffect(() => {
    console.log(scrollYProgress)
  }, [ scrollYProgress]);

  return (
    <div css={{ maxWidth: 900, padding: 48, margin: "0 auto" }}>
      <Typography
        children="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae elit a tortor sodales porttitor ut et leo. Suspendisse aliquet ipsum sit amet massa posuere bibendum. Donec ac egestas ex. Aliquam nec ligula ipsum. Phasellus varius, turpis nec condimentum interdum, risus erat tincidunt orci, quis facilisis tortor diam ac diam. Proin posuere neque risus, eget aliquam metus lobortis non. Quisque ultrices dui ut scelerisque pretium. Pellentesque cursus lacinia magna vel egestas. Sed eleifend ultrices rhoncus. Praesent posuere magna at convallis convallis.


Vestibulum vel venenatis eros. In molestie justo eget ultrices rutrum. Sed congue, dolor vitae lobortis ullamcorper, dolor dui tempor sem, nec dictum turpis lorem quis est. Nam vel sem a purus elementum condimentum a a velit. Fusce arcu sapien, vulputate eu arcu eu, rutrum consectetur leo. Sed faucibus tellus quis diam lacinia hendrerit. Etiam non mi vulputate, eleifend nisl at, commodo elit. Donec faucibus commodo nunc sit amet dignissim. Vestibulum vitae convallis dui. Duis facilisis scelerisque consequat. Vivamus quis ligula neque. Morbi ex sem, semper vel tincidunt quis, volutpat sed ante. Nulla facilisi.


Morbi ac magna eget massa ullamcorper dignissim. Fusce viverra nisi ex, vitae ultrices dolor lobortis vel. Cras a posuere elit. Phasellus sit amet leo vitae elit bibendum pretium in quis odio. Curabitur lacinia mi est, a vulputate mauris tincidunt vel. Suspendisse ut eleifend mi, euismod consectetur felis. Suspendisse placerat accumsan quam, a convallis elit auctor et. In sed ultricies tortor, a mattis sem. Nullam malesuada, est eu vulputate vestibulum, ipsum ex consequat justo, at dictum dui mauris in lectus. Praesent lacus neque, efficitur ultrices leo finibus, molestie sagittis lectus. Nunc purus augue, luctus euismod arcu vitae, consectetur faucibus risus. Cras at metus et massa convallis sollicitudin eu in urna. Nulla facilisi. Sed nisl ex, elementum nec quam tincidunt, imperdiet cursus ligula. Sed in ipsum in sapien volutpat lobortis eget a metus. Proin condimentum augue urna, ut placerat nisl faucibus sed.


Nulla non egestas ipsum. Sed tristique ligula quis nisl cursus placerat. Cras faucibus convallis ultricies. Integer pretium augue ut placerat mollis. Cras vestibulum diam nibh, quis cursus enim cursus eu. Sed tincidunt turpis eu purus rutrum, sed mattis libero fermentum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce convallis sapien in lorem mattis, eget dignissim velit porttitor. Ut vel est efficitur, viverra dui quis, maximus enim. Aenean bibendum libero sit amet odio eleifend laoreet. Morbi venenatis purus id odio dictum rutrum. Ut interdum, tortor vitae fringilla aliquam, lectus nisl rhoncus dui, id consectetur nisi libero feugiat enim. Nam non risus eros.


Sed id lectus massa. Donec porta augue mattis mauris accumsan, quis ornare lorem gravida. Duis laoreet ornare enim, sit amet condimentum leo placerat et. Suspendisse suscipit eu odio eu ornare. Nunc tincidunt vestibulum lobortis. Phasellus dapibus condimentum sapien, sit amet fringilla risus sollicitudin at. Quisque gravida vulputate est ut feugiat. Sed sit amet risus nisl. Fusce mattis at est a pretium. Pellentesque eu velit id arcu elementum cursus. Ut imperdiet dapibus dui, at tincidunt massa faucibus at. Nulla ac tempus purus, at bibendum arcu.


Nulla sit amet ante sit amet mi tempor ullamcorper vel vel lorem. Duis id mi quis neque gravida blandit tincidunt a turpis. Suspendisse eleifend, lectus porta venenatis lacinia, dolor nibh fringilla neque, vel gravida diam dui eget nisi. Praesent aliquet at velit quis fermentum. Praesent efficitur ligula eget congue ultrices. Fusce ornare dictum arcu, eget mattis leo laoreet in. Fusce dignissim turpis a nisl imperdiet, eu fermentum erat malesuada. Duis non erat consequat, lacinia nulla at, mollis metus. Nunc venenatis neque et justo iaculis, ut pellentesque augue ullamcorper.


Etiam mattis nunc sit amet arcu aliquet fermentum. Praesent porta felis eleifend, volutpat felis et, fringilla mauris. Nam pulvinar tincidunt tempus. Pellentesque pharetra tempus est. Praesent varius interdum sollicitudin. Fusce lacinia vel ante eget ullamcorper. Morbi nec purus vel dui ornare dapibus. Nam eu dui dictum, faucibus diam quis, imperdiet nisl. Nunc ultrices urna sem, eu volutpat ligula ultrices nec. Aliquam gravida quis erat sed luctus.


In euismod sapien vitae lorem blandit tempor. Duis vel quam sem. Fusce nec purus rutrum, porttitor sem et, feugiat metus. Mauris dictum imperdiet dolor, eget tempor enim luctus ut. Pellentesque interdum nibh id convallis dapibus. Praesent at orci tincidunt, iaculis ante vitae, dignissim enim. Vivamus neque justo, pulvinar eget posuere vel, commodo sed diam. Aenean ipsum magna, maximus volutpat urna et, mattis dignissim lectus.


Donec non ipsum vitae nunc malesuada auctor. Nam imperdiet ligula a arcu ultricies, in euismod ligula pharetra. Curabitur fringilla gravida lectus at tristique. Integer vel quam congue, convallis lectus vel, egestas nunc. Aenean ac augue ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ultrices ante quis dui fringilla facilisis. Fusce ligula velit, tincidunt eu iaculis rutrum, maximus vitae magna. Proin facilisis congue tellus sit amet commodo. Nulla a posuere nunc, in efficitur tellus. Donec sollicitudin condimentum mattis. Cras et nisl in lectus vulputate suscipit. Nulla dapibus dui et ipsum dignissim fringilla.


Duis ultricies ut est ac pharetra. Nulla molestie ligula laoreet rutrum pretium. Cras fringilla eros metus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse vulputate sem id dui ornare dignissim quis eget turpis. Vestibulum dapibus turpis in maximus malesuada. Duis lacinia venenatis lacus, eget viverra turpis. Duis ac lacus iaculis tellus consectetur ullamcorper. Proin ut auctor velit, quis pulvinar sem. Aliquam a volutpat dolor. Sed interdum lectus id felis varius dictum. Sed rhoncus sit amet arcu sit amet sodales.


Aliquam euismod velit felis, et hendrerit velit placerat eu. Nullam mollis aliquet lectus, eget fringilla urna convallis et. Aliquam sit amet dolor sit amet felis facilisis mollis. Praesent efficitur accumsan tristique. Morbi vel vestibulum lectus. Mauris quis mauris ut tellus dapibus congue nec eget orci. Aliquam convallis malesuada ante eu bibendum. Quisque nulla ante, aliquam ut diam nec, dapibus venenatis lorem. Praesent porttitor risus lorem, eu dignissim purus egestas nec. Etiam eget luctus dui, fermentum ullamcorper nunc. Suspendisse elit libero, fringilla nec consequat sit amet, vulputate vitae tortor. Morbi a sem dignissim, aliquam velit elementum, laoreet diam. Cras nisi metus, dignissim eget quam at, bibendum pretium nisi. Mauris eu mi faucibus, efficitur quam auctor, maximus neque. In dignissim lectus quis quam dapibus, quis posuere diam pulvinar.


Donec rhoncus tellus id sem maximus finibus. Proin diam eros, eleifend a maximus quis, dictum sit amet odio. Vivamus aliquet lorem ut nibh viverra, ut imperdiet tellus tincidunt. Nam at lorem sollicitudin, imperdiet orci et, mattis nisl. Pellentesque ut felis ut libero luctus sodales. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla tincidunt ex sit amet maximus feugiat. Quisque quis eros lobortis, tempus dolor vitae, finibus nulla. Sed est nibh, tristique id posuere ut, aliquet nec neque. Vestibulum fringilla a justo sed tristique. Nulla hendrerit ligula nisi, non pretium mi dignissim non. Aenean lobortis commodo est vitae varius. Sed eu velit ultrices, porttitor libero sit amet, pretium sapien. Suspendisse metus dolor, blandit et posuere eu, blandit sed arcu. Nulla hendrerit feugiat ligula eu fermentum.


Praesent tempor ante dignissim, placerat odio ut, vulputate ante. Quisque blandit nunc purus, eu semper nisi laoreet fringilla. Morbi euismod nulla non sapien malesuada consequat. Nunc dui arcu, dapibus volutpat tortor at, viverra consectetur ante. In feugiat tellus felis, rutrum tempor lectus dictum vel. Donec tincidunt aliquam sem. Sed magna urna, faucibus id nulla ut, dictum dictum tellus. Donec lorem augue, vehicula eu rutrum ullamcorper, tincidunt non leo. Sed elementum faucibus elit.

Sed vitae turpis ut erat blandit scelerisque. Quisque lobortis, dui vel egestas fermentum, diam nisl mattis nisl, non aliquam lacus nibh non arcu. Nulla sagittis hendrerit mauris a dapibus. Sed feugiat ipsum eu gravida tincidunt. Suspendisse nec ex eu nisi rhoncus dapibus. Maecenas id nisl nisl. Suspendisse sit amet ex vulputate, tempus ex a, efficitur elit. Maecenas laoreet, tortor ac convallis cursus, sapien massa dictum ante, non consectetur massa orci quis ex. Aenean eget ullamcorper ligula. Morbi condimentum lectus id sapien consectetur, sit amet condimentum turpis eleifend. Sed vulputate lectus non laoreet molestie. Donec aliquam rutrum enim, vel dapibus tellus ullamcorper vitae. Curabitur volutpat velit dolor, at tristique dolor pretium id.


Vivamus pulvinar, augue quis porta faucibus, ante odio cursus erat, fringilla gravida magna enim in lorem. Sed tincidunt auctor nibh, ut ullamcorper orci volutpat in. Nulla egestas, dolor vel gravida placerat, lorem magna ultrices ipsum, a interdum mauris eros quis nisi. Fusce arcu augue, porta quis consequat vitae, eleifend sed massa. Donec laoreet tincidunt felis, eu ullamcorper nunc malesuada eu. Suspendisse eget enim ac metus bibendum suscipit. Morbi metus felis, facilisis ac ante quis, sollicitudin vehicula urna. Nunc nisi nisl, fringilla laoreet maximus eu, vestibulum sit amet justo. Aliquam aliquet, tortor mollis fermentum sollicitudin, neque nulla lobortis libero, at tempus metus nisl id elit. Fusce a quam maximus, sodales arcu nec, fringilla elit."
      />
    </div>
  );
};

export default Lorem;
