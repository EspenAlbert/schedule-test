# projectinvitation/TestMigProjectInvitation_basic Test Details
# Found 39 TestRuns in dev, qa from 2025-05-28 to 2025-06-26 from master branch: 1 unique tests, PASS(x 38) FAIL
Success rate: 97.44%

## Timeline
2025-05-27: MISSING
### 2025-05-28
#### PASS 10 seconds
```
2025-05-28T00:40:31.0109646Z === RUN   TestMigProjectInvitation_basic
2025-05-28T00:40:31.0109977Z --- PASS: TestMigProjectInvitation_basic (10.47s)
```
#### PASS 11 seconds
```
2025-05-28T08:40:09.2717621Z === RUN   TestMigProjectInvitation_basic
2025-05-28T08:40:09.2717973Z --- PASS: TestMigProjectInvitation_basic (11.76s)
```
### 2025-05-29
#### PASS 14 seconds
```
2025-05-29T00:42:12.5029274Z === RUN   TestMigProjectInvitation_basic
2025-05-29T00:42:12.5029614Z --- PASS: TestMigProjectInvitation_basic (14.13s)
```
### 2025-05-30
#### PASS 12 seconds
```
2025-05-30T00:41:49.4578410Z === RUN   TestMigProjectInvitation_basic
2025-05-30T00:41:49.4578739Z --- PASS: TestMigProjectInvitation_basic (12.13s)
```
### 2025-05-31
#### PASS 9 seconds
```
2025-05-31T00:39:35.8000683Z === RUN   TestMigProjectInvitation_basic
2025-05-31T00:39:35.8001026Z --- PASS: TestMigProjectInvitation_basic (9.26s)
```
### 2025-06-01
#### PASS 12 seconds
```
2025-06-01T00:44:45.0721955Z === RUN   TestMigProjectInvitation_basic
2025-06-01T00:44:45.0722286Z --- PASS: TestMigProjectInvitation_basic (12.21s)
```
#### PASS 10 seconds
```
2025-06-01T04:53:00.6248421Z === RUN   TestMigProjectInvitation_basic
2025-06-01T04:53:00.6249017Z --- PASS: TestMigProjectInvitation_basic (10.72s)
```
#### PASS 10 seconds
```
2025-06-01T09:02:03.3899485Z === RUN   TestMigProjectInvitation_basic
2025-06-01T09:02:03.3899819Z --- PASS: TestMigProjectInvitation_basic (10.30s)
```
#### PASS 9 seconds
```
2025-06-01T13:11:21.1621327Z === RUN   TestMigProjectInvitation_basic
2025-06-01T13:11:21.1621662Z --- PASS: TestMigProjectInvitation_basic (9.84s)
```
#### PASS 13 seconds
```
2025-06-01T17:20:49.8573568Z === RUN   TestMigProjectInvitation_basic
2025-06-01T17:20:49.8573939Z --- PASS: TestMigProjectInvitation_basic (13.19s)
```
#### PASS 9 seconds
```
2025-06-01T21:28:25.8819201Z === RUN   TestMigProjectInvitation_basic
2025-06-01T21:28:25.8819540Z --- PASS: TestMigProjectInvitation_basic (9.46s)
```
### 2025-06-02
#### PASS 8 seconds
```
2025-06-02T00:42:03.4326819Z === RUN   TestMigProjectInvitation_basic
2025-06-02T00:42:03.4327145Z --- PASS: TestMigProjectInvitation_basic (8.52s)
```
#### PASS 16 seconds
```
2025-06-02T01:41:41.3943574Z === RUN   TestMigProjectInvitation_basic
2025-06-02T01:41:41.3943903Z --- PASS: TestMigProjectInvitation_basic (16.16s)
```
#### PASS 15 seconds
```
2025-06-02T05:53:31.5798246Z === RUN   TestMigProjectInvitation_basic
2025-06-02T05:53:31.5798577Z --- PASS: TestMigProjectInvitation_basic (15.42s)
```
### 2025-06-03
#### PASS 10 seconds
```
2025-06-03T00:41:25.4714341Z === RUN   TestMigProjectInvitation_basic
2025-06-03T00:41:25.4714784Z --- PASS: TestMigProjectInvitation_basic (10.80s)
```
### 2025-06-04
#### PASS 14 seconds
```
2025-06-04T00:34:02.8460185Z === RUN   TestMigProjectInvitation_basic
2025-06-04T00:34:02.8460536Z --- PASS: TestMigProjectInvitation_basic (14.25s)
```
### 2025-06-05
#### FAIL 4 seconds
```
2025-06-05T00:29:34.5144186Z === RUN   TestMigProjectInvitation_basic
2025-06-05T00:29:34.5150205Z    test_terraform_path=/home/runner/work/_temp/4383328b-21a3-41bd-b8a0-95c50737226a/terraform test_step_number=1 test_working_directory=/tmp/plugintest2385961978
2025-06-05T00:29:34.5151181Z     resource_project_invitation_migration_test.go:22: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:29:34.5151752Z         
2025-06-05T00:29:34.5152163Z         Error: error creating project: test-acc-tf-p-7958040422310907795
2025-06-05T00:29:34.5152551Z         
2025-06-05T00:29:34.5152855Z           with mongodbatlas_project.test,
2025-06-05T00:29:34.5153450Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-06-05T00:29:34.5153997Z           14: 		resource "mongodbatlas_project" "test" {
2025-06-05T00:29:34.5154299Z         
2025-06-05T00:29:34.5154756Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:29:34.5155387Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:29:34.5155958Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:29:34.5156373Z --- FAIL: TestMigProjectInvitation_basic (4.46s)
```
### 2025-06-06
#### PASS 15 seconds
```
2025-06-06T00:36:24.6061864Z === RUN   TestMigProjectInvitation_basic
2025-06-06T00:36:24.6062380Z --- PASS: TestMigProjectInvitation_basic (15.71s)
```
### 2025-06-07
#### PASS 11 seconds
```
2025-06-07T00:31:34.3004164Z === RUN   TestMigProjectInvitation_basic
2025-06-07T00:31:34.3004502Z --- PASS: TestMigProjectInvitation_basic (11.14s)
```
### 2025-06-08
#### PASS 13 seconds
```
2025-06-08T00:36:20.4633835Z === RUN   TestMigProjectInvitation_basic
2025-06-08T00:36:20.4634176Z --- PASS: TestMigProjectInvitation_basic (13.48s)
```
### 2025-06-09
#### PASS 14 seconds
```
2025-06-09T00:36:08.5711380Z === RUN   TestMigProjectInvitation_basic
2025-06-09T00:36:08.5711720Z --- PASS: TestMigProjectInvitation_basic (14.62s)
```
### 2025-06-10
#### PASS 16 seconds
```
2025-06-10T00:42:52.1819364Z === RUN   TestMigProjectInvitation_basic
2025-06-10T00:42:52.1819688Z --- PASS: TestMigProjectInvitation_basic (16.52s)
```
### 2025-06-11
#### PASS 11 seconds
```
2025-06-11T00:31:59.6450823Z === RUN   TestMigProjectInvitation_basic
2025-06-11T00:31:59.6451389Z --- PASS: TestMigProjectInvitation_basic (11.04s)
```
#### PASS 9 seconds
```
2025-06-11T07:39:33.7467797Z === RUN   TestMigProjectInvitation_basic
2025-06-11T07:39:33.7468131Z --- PASS: TestMigProjectInvitation_basic (9.65s)
```
### 2025-06-12
#### PASS 15 seconds
```
2025-06-12T00:33:16.4724680Z === RUN   TestMigProjectInvitation_basic
2025-06-12T00:33:16.4725053Z --- PASS: TestMigProjectInvitation_basic (15.41s)
```
### 2025-06-13
#### PASS 16 seconds
```
2025-06-13T00:33:55.1571409Z === RUN   TestMigProjectInvitation_basic
2025-06-13T00:33:55.1571725Z --- PASS: TestMigProjectInvitation_basic (16.26s)
```
### 2025-06-14
#### PASS 11 seconds
```
2025-06-14T00:31:25.2161274Z === RUN   TestMigProjectInvitation_basic
2025-06-14T00:31:25.2161598Z --- PASS: TestMigProjectInvitation_basic (11.49s)
```
### 2025-06-15
#### PASS 13 seconds
```
2025-06-15T00:36:14.3437687Z === RUN   TestMigProjectInvitation_basic
2025-06-15T00:36:14.3438005Z --- PASS: TestMigProjectInvitation_basic (13.69s)
```
### 2025-06-16
#### PASS 11 seconds
```
2025-06-16T00:33:20.2289848Z === RUN   TestMigProjectInvitation_basic
2025-06-16T00:33:20.2290172Z --- PASS: TestMigProjectInvitation_basic (11.05s)
```
### 2025-06-17
#### PASS 8 seconds
```
2025-06-17T00:31:50.0581951Z === RUN   TestMigProjectInvitation_basic
2025-06-17T00:31:50.0582271Z --- PASS: TestMigProjectInvitation_basic (8.99s)
```
### 2025-06-18
#### PASS 9 seconds
```
2025-06-18T00:31:48.4349315Z === RUN   TestMigProjectInvitation_basic
2025-06-18T00:31:48.4349628Z --- PASS: TestMigProjectInvitation_basic (9.54s)
```
### 2025-06-19
#### PASS 9 seconds
```
2025-06-19T00:31:58.4364034Z === RUN   TestMigProjectInvitation_basic
2025-06-19T00:31:58.4364354Z --- PASS: TestMigProjectInvitation_basic (9.50s)
```
### 2025-06-20
#### PASS 12 seconds
```
2025-06-20T00:32:00.0225874Z === RUN   TestMigProjectInvitation_basic
2025-06-20T00:32:00.0226308Z --- PASS: TestMigProjectInvitation_basic (12.03s)
```
### 2025-06-21
#### PASS 15 seconds
```
2025-06-21T00:34:00.9779606Z === RUN   TestMigProjectInvitation_basic
2025-06-21T00:34:00.9779927Z --- PASS: TestMigProjectInvitation_basic (15.96s)
```
### 2025-06-22
#### PASS 9 seconds
```
2025-06-22T00:36:57.9045232Z === RUN   TestMigProjectInvitation_basic
2025-06-22T00:36:57.9045559Z --- PASS: TestMigProjectInvitation_basic (9.25s)
```
### 2025-06-23
#### PASS 8 seconds
```
2025-06-23T00:33:38.2274973Z === RUN   TestMigProjectInvitation_basic
2025-06-23T00:33:38.2275289Z --- PASS: TestMigProjectInvitation_basic (8.98s)
```
### 2025-06-24
#### PASS 15 seconds
```
2025-06-24T00:34:16.6824100Z === RUN   TestMigProjectInvitation_basic
2025-06-24T00:34:16.6824417Z --- PASS: TestMigProjectInvitation_basic (15.80s)
```
### 2025-06-25
#### PASS 15 seconds
```
2025-06-25T00:34:38.2676500Z === RUN   TestMigProjectInvitation_basic
2025-06-25T00:34:38.2676816Z --- PASS: TestMigProjectInvitation_basic (15.88s)
```
### 2025-06-26
#### PASS 14 seconds
```
2025-06-26T00:33:55.8058091Z === RUN   TestMigProjectInvitation_basic
2025-06-26T00:33:55.8058415Z --- PASS: TestMigProjectInvitation_basic (14.51s)
```