import { Redirect } from "react-router-dom";
import Cookies from "js-cookie";
import Header from "../Header";
import "./index.css";

const Resource = () => {
  const jwtToken = Cookies.get("jwt_token");

  if (jwtToken === undefined) {
    return <Redirect to="/login" />;
  }
  return (
    <div>
      <Header />
      <div className="resource">
        <h1>RESOURCES</h1>
        <h2>DSA notes</h2>
        <h3> ARRAYS</h3>
        <p>
          {" "}
          In computer science, the obvious way to store an ordered collection of
          items is as an array. Array items are typically stored in a sequence
          of computer memory locations, but to discuss them, we need a
          convenient way to write them down on paper. We can just write the
          items in order, separated by commas and enclosed by square brackets.
          Thus,
          <br />
          [1, 4, 17, 3, 90, 79, 4, 6, 81]
          <br />
          is an example of an array of integers. If we call this array a, we can
          write it as:
          <br />a = [1, 4, 17, 3, 90, 79, 4, 6, 81]
          <br />
          This array a has 9 items, and hence we say that its size is 9. In
          everyday life, we usually start counting from 1. When we work with
          arrays in computer science, however, we more often (though not always)
          start from 0. Thus, for our array a, its positions are 0, 1, 2, . . .
          , 7, 8. The element in the 8th position is 81, and we use the notation
          a[8] to denote this element. More generally, for any integer i
          denoting a position, we write a[i] to denote the element in the i th
          position. This position i is called an index (and the plural is
          indices). Then, in the above example, a[0] = 1, a[1] = 4, a[2] = 17,
          and so on. It is worth noting at this point that the symbol = is quite
          overloaded. In mathematics, it stands for equality. In most modern
          programming languages, = denotes assignment, while equality is
          expressed by ==. We will typically use = in its mathematical meaning,
          unless it is written as part of code or pseudocode. We say that the
          individual items a[i] in the array a are accessed using their index i,
          and one can move sequentially through the array by incrementing or
          decrementing that index, or jump straight to a particular item given
          its index value. Algorithms that process data stored as arrays will
          typically need to visit systematically all the items in the array, and
          apply appropriate operations on them.
        </p>

        <h3>RECURSION</h3>
        <p>
          {" "}
          When items are stored as linked-lists, there is no index for each
          item, and recursion provides the natural way to process them. The idea
          is to formulate procedures which involve at least one step that
          invokes (or calls) the procedure itself. We will now look at how to
          implement two important derived procedures on lists, last and append,
          which illustrate how recursion works. To find the last element of a
          list l we can simply keep removing the first remaining item till there
          are no more left. This algorithm can be written in pseudocode as:
          last(l) <br />
          The running time of this depends on the length of the list, and is
          proportional to that length, since last is called as often as there
          are elements in the list. We say that the procedure has linear time
          complexity, that is, if the length of the list is increased by some
          factor, the execution time is increased by the same factor. Compared
          to the constant time complexity which access to the last element of an
          array has, this is quite bad. It does not mean, however, that lists
          are inferior to arrays in general, it just means that lists are not
          the ideal data structure when a program has to access the last element
          of a long list very often.
          <br />
          Another useful procedure allows us to append one list l2 to another
          list l1. Again, this needs to be done one item at a time, and that can
          be accomplished by repeatedly taking the first remaining item of l1
          and adding it to the front of the remainder appended to l2:
          <br />
          append(l1,l2) <br />
        </p>
      </div>
    </div>
  );
};
export default Resource;
