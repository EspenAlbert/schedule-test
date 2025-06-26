# project/projectinvitation/TestAccProjectRSProjectInvitation_basic Test Details
# Found 39 TestRuns in dev, qa from 2025-05-28 to 2025-06-26 from master branch: 1 unique tests, PASS(x 38) FAIL
Success rate: 97.44%

## Timeline
2025-05-27: MISSING
### 2025-05-28
#### PASS 8 seconds
```
2025-05-28T00:40:31.0110330Z === RUN   TestAccProjectRSProjectInvitation_basic
2025-05-28T00:40:31.0110706Z --- PASS: TestAccProjectRSProjectInvitation_basic (8.69s)
```
#### PASS 9 seconds
```
2025-05-28T08:40:09.2718347Z === RUN   TestAccProjectRSProjectInvitation_basic
2025-05-28T08:40:09.2718740Z --- PASS: TestAccProjectRSProjectInvitation_basic (9.91s)
```
### 2025-05-29
#### PASS 13 seconds
```
2025-05-29T00:42:12.5029977Z === RUN   TestAccProjectRSProjectInvitation_basic
2025-05-29T00:42:12.5030372Z --- PASS: TestAccProjectRSProjectInvitation_basic (13.22s)
```
### 2025-05-30
#### PASS 11 seconds
```
2025-05-30T00:41:49.4579092Z === RUN   TestAccProjectRSProjectInvitation_basic
2025-05-30T00:41:49.4579473Z --- PASS: TestAccProjectRSProjectInvitation_basic (11.18s)
```
### 2025-05-31
#### PASS 7 seconds
```
2025-05-31T00:39:35.8001394Z === RUN   TestAccProjectRSProjectInvitation_basic
2025-05-31T00:39:35.8001969Z --- PASS: TestAccProjectRSProjectInvitation_basic (7.08s)
```
### 2025-06-01
#### PASS 10 seconds
```
2025-06-01T00:44:45.0722636Z === RUN   TestAccProjectRSProjectInvitation_basic
2025-06-01T00:44:45.0723021Z --- PASS: TestAccProjectRSProjectInvitation_basic (10.37s)
```
#### PASS 8 seconds
```
2025-06-01T04:53:00.6249640Z === RUN   TestAccProjectRSProjectInvitation_basic
2025-06-01T04:53:00.6250285Z --- PASS: TestAccProjectRSProjectInvitation_basic (8.11s)
```
#### PASS 8 seconds
```
2025-06-01T09:02:03.3900179Z === RUN   TestAccProjectRSProjectInvitation_basic
2025-06-01T09:02:03.3900561Z --- PASS: TestAccProjectRSProjectInvitation_basic (8.20s)
```
#### PASS 9 seconds
```
2025-06-01T13:11:21.1622020Z === RUN   TestAccProjectRSProjectInvitation_basic
2025-06-01T13:11:21.1622407Z --- PASS: TestAccProjectRSProjectInvitation_basic (9.22s)
```
#### PASS 7 seconds
```
2025-06-01T17:20:49.8574368Z === RUN   TestAccProjectRSProjectInvitation_basic
2025-06-01T17:20:49.8574797Z --- PASS: TestAccProjectRSProjectInvitation_basic (7.25s)
```
#### PASS 7 seconds
```
2025-06-01T21:28:25.8819895Z === RUN   TestAccProjectRSProjectInvitation_basic
2025-06-01T21:28:25.8820385Z --- PASS: TestAccProjectRSProjectInvitation_basic (7.18s)
```
### 2025-06-02
#### PASS 7 seconds
```
2025-06-02T00:42:03.4327486Z === RUN   TestAccProjectRSProjectInvitation_basic
2025-06-02T00:42:03.4327863Z --- PASS: TestAccProjectRSProjectInvitation_basic (7.62s)
```
#### PASS 12 seconds
```
2025-06-02T01:41:41.3944260Z === RUN   TestAccProjectRSProjectInvitation_basic
2025-06-02T01:41:41.3944670Z --- PASS: TestAccProjectRSProjectInvitation_basic (12.71s)
```
#### PASS 8 seconds
```
2025-06-02T05:53:31.5798927Z === RUN   TestAccProjectRSProjectInvitation_basic
2025-06-02T05:53:31.5799302Z --- PASS: TestAccProjectRSProjectInvitation_basic (8.47s)
```
### 2025-06-03
#### PASS 8 seconds
```
2025-06-03T00:41:25.4715163Z === RUN   TestAccProjectRSProjectInvitation_basic
2025-06-03T00:41:25.4715560Z --- PASS: TestAccProjectRSProjectInvitation_basic (8.80s)
```
### 2025-06-04
#### PASS 13 seconds
```
2025-06-04T00:34:02.8460907Z === RUN   TestAccProjectRSProjectInvitation_basic
2025-06-04T00:34:02.8461315Z --- PASS: TestAccProjectRSProjectInvitation_basic (13.77s)
```
### 2025-06-05
#### FAIL 2 seconds
```
2025-06-05T00:29:34.5156736Z === RUN   TestAccProjectRSProjectInvitation_basic
2025-06-05T00:29:34.5166852Z    test_working_directory=/tmp/plugintest1329368221 test_name=TestAccProjectRSProjectInvitation_basic test_terraform_path=/home/runner/work/_temp/4383328b-21a3-41bd-b8a0-95c50737226a/terraform
2025-06-05T00:29:34.5167895Z     resource_project_invitation_test.go:26: Step 1/3 error: Error running apply: exit status 1
2025-06-05T00:29:34.5168441Z         
2025-06-05T00:29:34.5168851Z         Error: error creating project: test-acc-tf-p-7144486436131174998
2025-06-05T00:29:34.5169212Z         
2025-06-05T00:29:34.5169514Z           with mongodbatlas_project.test,
2025-06-05T00:29:34.5170118Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-06-05T00:29:34.5170663Z           12: 		resource "mongodbatlas_project" "test" {
2025-06-05T00:29:34.5170964Z         
2025-06-05T00:29:34.5171528Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:29:34.5172179Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:29:34.5172752Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:29:34.5173197Z --- FAIL: TestAccProjectRSProjectInvitation_basic (2.06s)
```
### 2025-06-06
#### PASS 12 seconds
```
2025-06-06T00:36:24.6062914Z === RUN   TestAccProjectRSProjectInvitation_basic
2025-06-06T00:36:24.6063468Z --- PASS: TestAccProjectRSProjectInvitation_basic (12.22s)
```
### 2025-06-07
#### PASS 6 seconds
```
2025-06-07T00:31:34.3004850Z === RUN   TestAccProjectRSProjectInvitation_basic
2025-06-07T00:31:34.3005233Z --- PASS: TestAccProjectRSProjectInvitation_basic (6.60s)
```
### 2025-06-08
#### PASS 11 seconds
```
2025-06-08T00:36:20.4634540Z === RUN   TestAccProjectRSProjectInvitation_basic
2025-06-08T00:36:20.4634937Z --- PASS: TestAccProjectRSProjectInvitation_basic (11.58s)
```
### 2025-06-09
#### PASS 13 seconds
```
2025-06-09T00:36:08.5712091Z === RUN   TestAccProjectRSProjectInvitation_basic
2025-06-09T00:36:08.5712480Z --- PASS: TestAccProjectRSProjectInvitation_basic (13.13s)
```
### 2025-06-10
#### PASS 13 seconds
```
2025-06-10T00:42:52.1820027Z === RUN   TestAccProjectRSProjectInvitation_basic
2025-06-10T00:42:52.1820397Z --- PASS: TestAccProjectRSProjectInvitation_basic (13.75s)
```
### 2025-06-11
#### PASS 8 seconds
```
2025-06-11T00:31:59.6452004Z === RUN   TestAccProjectRSProjectInvitation_basic
2025-06-11T00:31:59.6452654Z --- PASS: TestAccProjectRSProjectInvitation_basic (8.62s)
```
#### PASS 7 seconds
```
2025-06-11T07:39:33.7468647Z === RUN   TestAccProjectRSProjectInvitation_basic
2025-06-11T07:39:33.7469062Z --- PASS: TestAccProjectRSProjectInvitation_basic (7.40s)
```
### 2025-06-12
#### PASS 13 seconds
```
2025-06-12T00:33:16.4725395Z === RUN   TestAccProjectRSProjectInvitation_basic
2025-06-12T00:33:16.4725766Z --- PASS: TestAccProjectRSProjectInvitation_basic (13.40s)
```
### 2025-06-13
#### PASS 12 seconds
```
2025-06-13T00:33:55.1572066Z === RUN   TestAccProjectRSProjectInvitation_basic
2025-06-13T00:33:55.1572433Z --- PASS: TestAccProjectRSProjectInvitation_basic (12.82s)
```
### 2025-06-14
#### PASS 8 seconds
```
2025-06-14T00:31:25.2161934Z === RUN   TestAccProjectRSProjectInvitation_basic
2025-06-14T00:31:25.2162305Z --- PASS: TestAccProjectRSProjectInvitation_basic (8.02s)
```
### 2025-06-15
#### PASS 10 seconds
```
2025-06-15T00:36:14.3438342Z === RUN   TestAccProjectRSProjectInvitation_basic
2025-06-15T00:36:14.3438715Z --- PASS: TestAccProjectRSProjectInvitation_basic (10.27s)
```
### 2025-06-16
#### PASS 8 seconds
```
2025-06-16T00:33:20.2290506Z === RUN   TestAccProjectRSProjectInvitation_basic
2025-06-16T00:33:20.2290867Z --- PASS: TestAccProjectRSProjectInvitation_basic (8.70s)
```
### 2025-06-17
#### PASS 6 seconds
```
2025-06-17T00:31:50.0582620Z === RUN   TestAccProjectRSProjectInvitation_basic
2025-06-17T00:31:50.0582986Z --- PASS: TestAccProjectRSProjectInvitation_basic (6.75s)
```
### 2025-06-18
#### PASS 7 seconds
```
2025-06-18T00:31:48.4349964Z === RUN   TestAccProjectRSProjectInvitation_basic
2025-06-18T00:31:48.4350331Z --- PASS: TestAccProjectRSProjectInvitation_basic (7.26s)
```
### 2025-06-19
#### PASS 6 seconds
```
2025-06-19T00:31:58.4364704Z === RUN   TestAccProjectRSProjectInvitation_basic
2025-06-19T00:31:58.4365073Z --- PASS: TestAccProjectRSProjectInvitation_basic (6.34s)
```
### 2025-06-20
#### PASS 10 seconds
```
2025-06-20T00:32:00.0226649Z === RUN   TestAccProjectRSProjectInvitation_basic
2025-06-20T00:32:00.0227058Z --- PASS: TestAccProjectRSProjectInvitation_basic (10.71s)
```
### 2025-06-21
#### PASS 13 seconds
```
2025-06-21T00:34:00.9780266Z === RUN   TestAccProjectRSProjectInvitation_basic
2025-06-21T00:34:00.9780642Z --- PASS: TestAccProjectRSProjectInvitation_basic (13.28s)
```
### 2025-06-22
#### PASS 7 seconds
```
2025-06-22T00:36:57.9045904Z === RUN   TestAccProjectRSProjectInvitation_basic
2025-06-22T00:36:57.9046473Z --- PASS: TestAccProjectRSProjectInvitation_basic (7.44s)
```
### 2025-06-23
#### PASS 9 seconds
```
2025-06-23T00:33:38.2275625Z === RUN   TestAccProjectRSProjectInvitation_basic
2025-06-23T00:33:38.2275996Z --- PASS: TestAccProjectRSProjectInvitation_basic (9.61s)
```
### 2025-06-24
#### PASS 12 seconds
```
2025-06-24T00:34:16.6824754Z === RUN   TestAccProjectRSProjectInvitation_basic
2025-06-24T00:34:16.6825127Z --- PASS: TestAccProjectRSProjectInvitation_basic (12.87s)
```
### 2025-06-25
#### PASS 12 seconds
```
2025-06-25T00:34:38.2677157Z === RUN   TestAccProjectRSProjectInvitation_basic
2025-06-25T00:34:38.2677522Z --- PASS: TestAccProjectRSProjectInvitation_basic (12.74s)
```
### 2025-06-26
#### PASS 12 seconds
```
2025-06-26T00:33:55.8058759Z === RUN   TestAccProjectRSProjectInvitation_basic
2025-06-26T00:33:55.8059138Z --- PASS: TestAccProjectRSProjectInvitation_basic (12.91s)
```