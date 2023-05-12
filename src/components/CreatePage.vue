<template>
    <div class="container mb-3">
        <!-- Form Area -->
        <form action="">
            <!-- Title Area -->
            <div class="mb-3">
                <label for="" class="form-label"> Page Title </label>
                <input 
                    type="text" 
                    class="form-control" 
                    v-model="pageTitle" 
                />
            </div>

            <!-- Content Area -->
            <div class="mb-3">
                <label for="" class="form-label">
                    Content
                </label>

                <textarea 
                    type="text" 
                    class="form-control" 
                    rows="5" 
                    v-model="content"
                    >
                </textarea>
            </div>
 
    <!-- Link Text -->
    <div class="col">
        <div class="mb-3">
            <label for="" class="form-label">
                Link Text
            </label>
            <input 
            type="text"
            class="form-control" 
            v-model="linkText"
            />
        </div>
    </div>

    <!-- Link URL -->
    <div class="col">
        <div class="mb-3">
            <label for="" class="form-label">
                Link URL
            </label>
            <input
            type="text" 
            class="form-control" 
            v-model="linkURL"
            />
        </div>
    </div>
    
    <!-- Check Box -->
    <div class="row mb-3">
        <div class="form=check">
            <input class="form-check-input" type="checkbox" id="publishCheckBox" v-model="published">
            <label class="form-check-label unselectable" for="publishCheckBox">
                Publish Online
            </label>
        </div>
    </div>

    <!-- Button Area -->
    <div class="mb-3">
        <button 
            @click.prevent="submitForm()"
            class="btn btn-primary"
            :disabled="isFormInvalid"
            >
            Create Page
        </button>
    </div>
    </form>
</div>
</template>

<script>
export default {
    // Declaring emit options like the props or can declare as object to add validation if needed
    emits: {
        pageCreated({pageTitle, content, link, published}) {
            // here we write the code that will validate the payload

            if(!pageTitle){
                return false;
            }

            if(!content){
                return false;
            }

            if(!link || !link.text || !link.URL){
                return false;
            }
            
            return true;
        }
    },
    data() {
        return {
            pageTitle: "",
            content: "",
            linkURL: "",
            linkText: "",
            published: true
        };
    },
    computed:{
        isFormInvalid(){
            // If anyone of our values is false then it will return false -> the button will be disabled
            return !this.pageTitle || !this.content || !this.linkURL || !this.linkText;
        }
    },
    methods: {
        submitForm(){
            if(!this.pageTitle || !this.content || !this.linkURL || !this.linkText){
                alert("Please Fill out the form")
                return;
            }

            // Return a custom event to parent 
            // $ ment to announce this is a public property
            // Our first argument is the name of the event,
            // the second option is to supply the information involved with that event in this case we pass an object
            this.$emit('pageCreated', {
                PageTitle: this.pageTitle,
                content: this.content,
                published: this.published,
                link: {
                    text: this.linkText,
                    URL: this.linkURL,
                }
            })

            this.pageTitle= "",
            this.content= "",
            this.linkURL= "",
            this.linkText= "",
            this.published= true
        }
    },  
    // Watcher watch for value change and allows us to mutate our state,
    // In here we watch for changes in the page title and we put it in the linkText and if user changes link text
    // it wont override the page title nor the opposite
    watch:{
        pageTitle(newTitle, oldTitle) {
            if(this.linkText === oldTitle){
                this.linkText = newTitle;
            }
        }
    }
};
</script>

<style scoped>
.unselectable{
    padding-left: 10px;
    -webkit-user-select:none;
    -moz-user-select:none;
    user-select:none;
}
</style>

<!-- 2:12 -->