describe("pow(2,3)=8, pow(3,4)=81", function() {
	it("pow(x,n)", function() {//pass only two are both true.
		assert.equal(pow(2, 3), 8);
		assert.equal(pow(3,4), 81);
	});
	
	it("pow(4,5)=1024", function(){
		assert.equal(pow(4, 5), 1024);
	}
			
	describe("x*x*x", function(){//inner describe for make group
		function makeTest(x){//make it block automatically
			let expected=x*x*x;
			it('pow(${x},3): ${expected}', function(){
				assert.equal(pow(x,3),expected);
			});
		}
		for(let x=1; x<=5; x++)
			makeTest(x);
	});
			
	describle("test", function(){//use before&after, beforeEach&afterEach
		before(()=>alert("Start Test-before test"));//for All
		after(()=>alert("Exit Test-after test"));
				
		beforeEach(()=>alert("Start element Test-before test for element"));//per it
		afterEach(()=>alert("Exit element Test-after test for element"));
				
		it('test 1', ()=>alert(1));
		it('test 2', ()=>alert(2));
	});
	
	describe("pow", function(){
		it("signed -, NaN", function(){
			assert.isNaN(pow(2,-1));
		});
		it("not Integer, NaN", function(){
			assert.isNaN(pow(2, 1.5));
		});
	};
});

//assert's methods: .equal .structEqual .notEqual .isTrue .isFalse ...etc