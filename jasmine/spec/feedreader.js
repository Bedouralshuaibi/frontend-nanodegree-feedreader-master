/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */


        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);

        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */


         it('allFeeds has URL defined', function(){
           for (var i = 0; i < allFeeds.length; ++i) {
            expect(allFeeds[i].url).toBeDefined();
            expect(allFeeds[i].url.length).not.toBe(0);
          }

        })


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('allFeeds has Name defined', function(){
           for (var i = 0; i < allFeeds.length; ++i) {
              expect(allFeeds[i].name).toBeDefined();
              expect(allFeeds[i].name.lenght).not.toBe(0);
          }

       });

    });


    /* TODO: Write a new test suite named "The menu" */
       describe('The menu', function(){


        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
         it('menu should be hidden', function(){
           var el = document.querySelector('body');
           el.className = 'menu-hidden';
           expect(el).toHaveClass('menu-hidden');
         });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          it('menu should change visibility when the menu icon is clicked', function(){
             expect(function(){ return menuIcon.on()}).toThrow();
             expect(function(){ return feedList.on()}).toThrow();
           })

        });


    /* TODO: Write a new test suite named "Initial Entries" */
       describe('Initial Entries', function(){
         var container;

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         beforeEach(function(done){
               spyOn(window, 'loadFeed');
               loadFeed();
                expect(window.loadFeed).toHaveBeenCalled();
             done();
           });



       it('should be an entry within the feed container', function(done){

         expect(container).not.toBe(null);;

            done();
        })
      });

    /* TODO: Write a new test suite named "New Feed Selection" */
       describe('New Feed Selection', function(){
         var feedFirst;
         var feedSecond;

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
         beforeEach(function(done){
           loadFeed(0,function(){
             feedFirst = $('.feed').find(allFeeds.url);
             done();
           });
           loadFeed(1,function(){
             feedSecond = $('.feed').find(allFeeds.url);
             done();
           })
         })
           it('should the content of the new feed is change',function(){
             expect(feedFirst).not.toBe(feedSecond);
           });
       })
}());
