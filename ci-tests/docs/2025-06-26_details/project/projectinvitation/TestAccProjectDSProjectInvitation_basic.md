# project/projectinvitation/TestAccProjectDSProjectInvitation_basic Test Details
# Found 39 TestRuns in dev, qa from 2025-05-28 to 2025-06-26 from master branch: 1 unique tests, PASS(x 37) FAIL(x 2)
Success rate: 94.87%

## Timeline
2025-05-27: MISSING
### 2025-05-28
#### PASS 6 seconds
```
2025-05-28T00:40:31.0108885Z === RUN   TestAccProjectDSProjectInvitation_basic
2025-05-28T00:40:31.0109278Z --- PASS: TestAccProjectDSProjectInvitation_basic (6.60s)
```
#### PASS 6 seconds
```
2025-05-28T08:40:09.2716829Z === RUN   TestAccProjectDSProjectInvitation_basic
2025-05-28T08:40:09.2717234Z --- PASS: TestAccProjectDSProjectInvitation_basic (6.41s)
```
### 2025-05-29
#### PASS 8 seconds
```
2025-05-29T00:42:12.5028480Z === RUN   TestAccProjectDSProjectInvitation_basic
2025-05-29T00:42:12.5028895Z --- PASS: TestAccProjectDSProjectInvitation_basic (8.76s)
```
### 2025-05-30
#### PASS 6 seconds
```
2025-05-30T00:41:49.4577443Z === RUN   TestAccProjectDSProjectInvitation_basic
2025-05-30T00:41:49.4577837Z --- PASS: TestAccProjectDSProjectInvitation_basic (6.58s)
```
### 2025-05-31
#### PASS 5 seconds
```
2025-05-31T00:39:35.7999897Z === RUN   TestAccProjectDSProjectInvitation_basic
2025-05-31T00:39:35.8000304Z --- PASS: TestAccProjectDSProjectInvitation_basic (5.84s)
```
### 2025-06-01
#### PASS 7 seconds
```
2025-06-01T00:44:45.0721056Z === RUN   TestAccProjectDSProjectInvitation_basic
2025-06-01T00:44:45.0721459Z --- PASS: TestAccProjectDSProjectInvitation_basic (7.30s)
```
#### PASS 5 seconds
```
2025-06-01T04:53:00.6247154Z === RUN   TestAccProjectDSProjectInvitation_basic
2025-06-01T04:53:00.6247796Z --- PASS: TestAccProjectDSProjectInvitation_basic (5.94s)
```
#### PASS 6 seconds
```
2025-06-01T09:02:03.3898710Z === RUN   TestAccProjectDSProjectInvitation_basic
2025-06-01T09:02:03.3899112Z --- PASS: TestAccProjectDSProjectInvitation_basic (6.16s)
```
#### PASS 6 seconds
```
2025-06-01T13:11:21.1620558Z === RUN   TestAccProjectDSProjectInvitation_basic
2025-06-01T13:11:21.1620956Z --- PASS: TestAccProjectDSProjectInvitation_basic (6.41s)
```
#### PASS 6 seconds
```
2025-06-01T17:20:49.8572709Z === RUN   TestAccProjectDSProjectInvitation_basic
2025-06-01T17:20:49.8573148Z --- PASS: TestAccProjectDSProjectInvitation_basic (6.82s)
```
#### PASS 5 seconds
```
2025-06-01T21:28:25.8818440Z === RUN   TestAccProjectDSProjectInvitation_basic
2025-06-01T21:28:25.8818839Z --- PASS: TestAccProjectDSProjectInvitation_basic (5.13s)
```
### 2025-06-02
#### PASS 6 seconds
```
2025-06-02T00:42:03.4326077Z === RUN   TestAccProjectDSProjectInvitation_basic
2025-06-02T00:42:03.4326466Z --- PASS: TestAccProjectDSProjectInvitation_basic (6.31s)
```
#### PASS 8 seconds
```
2025-06-02T01:41:41.3942811Z === RUN   TestAccProjectDSProjectInvitation_basic
2025-06-02T01:41:41.3943213Z --- PASS: TestAccProjectDSProjectInvitation_basic (8.05s)
```
#### PASS 5 seconds
```
2025-06-02T05:53:31.5797491Z === RUN   TestAccProjectDSProjectInvitation_basic
2025-06-02T05:53:31.5797888Z --- PASS: TestAccProjectDSProjectInvitation_basic (5.79s)
```
### 2025-06-03
#### PASS 7 seconds
```
2025-06-03T00:41:25.4713543Z === RUN   TestAccProjectDSProjectInvitation_basic
2025-06-03T00:41:25.4713956Z --- PASS: TestAccProjectDSProjectInvitation_basic (7.36s)
```
### 2025-06-04
#### PASS 7 seconds
```
2025-06-04T00:34:02.8459389Z === RUN   TestAccProjectDSProjectInvitation_basic
2025-06-04T00:34:02.8459807Z --- PASS: TestAccProjectDSProjectInvitation_basic (7.54s)
```
### 2025-06-05
#### FAIL a second
```
2025-06-05T00:29:34.5127452Z === RUN   TestAccProjectDSProjectInvitation_basic
2025-06-05T00:29:34.5137583Z    test_name=TestAccProjectDSProjectInvitation_basic test_terraform_path=/home/runner/work/_temp/4383328b-21a3-41bd-b8a0-95c50737226a/terraform
2025-06-05T00:29:34.5138483Z     data_source_project_invitation_test.go:22: Step 1/1 error: Error running apply: exit status 1
2025-06-05T00:29:34.5138926Z         
2025-06-05T00:29:34.5139340Z         Error: error creating project: test-acc-tf-p-142538393042915488
2025-06-05T00:29:34.5139706Z         
2025-06-05T00:29:34.5140014Z           with mongodbatlas_project.test,
2025-06-05T00:29:34.5140617Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2025-06-05T00:29:34.5141372Z           13: 		resource "mongodbatlas_project" "test" {
2025-06-05T00:29:34.5141697Z         
2025-06-05T00:29:34.5142166Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:29:34.5142803Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:29:34.5143375Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:29:34.5143816Z --- FAIL: TestAccProjectDSProjectInvitation_basic (1.62s)
```
### 2025-06-06
#### PASS 7 seconds
```
2025-06-06T00:36:24.6060770Z === RUN   TestAccProjectDSProjectInvitation_basic
2025-06-06T00:36:24.6061331Z --- PASS: TestAccProjectDSProjectInvitation_basic (7.71s)
```
### 2025-06-07
#### PASS 6 seconds
```
2025-06-07T00:31:34.3003406Z === RUN   TestAccProjectDSProjectInvitation_basic
2025-06-07T00:31:34.3003803Z --- PASS: TestAccProjectDSProjectInvitation_basic (6.03s)
```
### 2025-06-08
#### PASS 9 seconds
```
2025-06-08T00:36:20.4633066Z === RUN   TestAccProjectDSProjectInvitation_basic
2025-06-08T00:36:20.4633462Z --- PASS: TestAccProjectDSProjectInvitation_basic (9.04s)
```
### 2025-06-09
#### PASS 8 seconds
```
2025-06-09T00:36:08.5710461Z === RUN   TestAccProjectDSProjectInvitation_basic
2025-06-09T00:36:08.5711001Z --- PASS: TestAccProjectDSProjectInvitation_basic (8.70s)
```
### 2025-06-10
#### PASS 8 seconds
```
2025-06-10T00:42:52.1818631Z === RUN   TestAccProjectDSProjectInvitation_basic
2025-06-10T00:42:52.1819012Z --- PASS: TestAccProjectDSProjectInvitation_basic (8.65s)
```
### 2025-06-11
#### PASS 6 seconds
```
2025-06-11T00:31:59.6449533Z === RUN   TestAccProjectDSProjectInvitation_basic
2025-06-11T00:31:59.6450199Z --- PASS: TestAccProjectDSProjectInvitation_basic (6.42s)
```
#### PASS 4 seconds
```
2025-06-11T07:39:33.7467035Z === RUN   TestAccProjectDSProjectInvitation_basic
2025-06-11T07:39:33.7467434Z --- PASS: TestAccProjectDSProjectInvitation_basic (4.33s)
```
### 2025-06-12
#### PASS 10 seconds
```
2025-06-12T00:33:16.4723773Z === RUN   TestAccProjectDSProjectInvitation_basic
2025-06-12T00:33:16.4724155Z --- PASS: TestAccProjectDSProjectInvitation_basic (10.91s)
```
### 2025-06-13
#### PASS 8 seconds
```
2025-06-13T00:33:55.1570654Z === RUN   TestAccProjectDSProjectInvitation_basic
2025-06-13T00:33:55.1571058Z --- PASS: TestAccProjectDSProjectInvitation_basic (8.18s)
```
### 2025-06-14
#### PASS 6 seconds
```
2025-06-14T00:31:25.2160535Z === RUN   TestAccProjectDSProjectInvitation_basic
2025-06-14T00:31:25.2160915Z --- PASS: TestAccProjectDSProjectInvitation_basic (6.79s)
```
### 2025-06-15
#### PASS 8 seconds
```
2025-06-15T00:36:14.3436951Z === RUN   TestAccProjectDSProjectInvitation_basic
2025-06-15T00:36:14.3437333Z --- PASS: TestAccProjectDSProjectInvitation_basic (8.23s)
```
### 2025-06-16
#### PASS 6 seconds
```
2025-06-16T00:33:20.2289112Z === RUN   TestAccProjectDSProjectInvitation_basic
2025-06-16T00:33:20.2289498Z --- PASS: TestAccProjectDSProjectInvitation_basic (6.12s)
```
### 2025-06-17
#### PASS 6 seconds
```
2025-06-17T00:31:50.0581215Z === RUN   TestAccProjectDSProjectInvitation_basic
2025-06-17T00:31:50.0581602Z --- PASS: TestAccProjectDSProjectInvitation_basic (6.06s)
```
### 2025-06-18
#### PASS 6 seconds
```
2025-06-18T00:31:48.4348584Z === RUN   TestAccProjectDSProjectInvitation_basic
2025-06-18T00:31:48.4348969Z --- PASS: TestAccProjectDSProjectInvitation_basic (6.38s)
```
### 2025-06-19
#### PASS 5 seconds
```
2025-06-19T00:31:58.4363305Z === RUN   TestAccProjectDSProjectInvitation_basic
2025-06-19T00:31:58.4363685Z --- PASS: TestAccProjectDSProjectInvitation_basic (5.70s)
```
### 2025-06-20
#### PASS 7 seconds
```
2025-06-20T00:32:00.0224988Z === RUN   TestAccProjectDSProjectInvitation_basic
2025-06-20T00:32:00.0225379Z --- PASS: TestAccProjectDSProjectInvitation_basic (7.74s)
```
### 2025-06-21
#### PASS 8 seconds
```
2025-06-21T00:34:00.9778752Z === RUN   TestAccProjectDSProjectInvitation_basic
2025-06-21T00:34:00.9779241Z --- PASS: TestAccProjectDSProjectInvitation_basic (8.57s)
```
### 2025-06-22
#### FAIL 32 seconds
```
2025-06-22T00:36:57.9025242Z === RUN   TestAccProjectDSProjectInvitation_basic
2025-06-22T00:36:57.9037979Z   
2025-06-22T00:36:57.9038473Z     data_source_project_invitation_test.go:22: Step 1/1 error: Error running apply: exit status 1
2025-06-22T00:36:57.9038898Z         
2025-06-22T00:36:57.9039267Z         Error: error when getting project properties after create
2025-06-22T00:36:57.9039588Z         
2025-06-22T00:36:57.9039871Z           with mongodbatlas_project.test,
2025-06-22T00:36:57.9040443Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2025-06-22T00:36:57.9041220Z           13: 		resource "mongodbatlas_project" "test" {
2025-06-22T00:36:57.9041507Z         
2025-06-22T00:36:57.9041934Z         error getting project (68574efcab82446d9bfb0e33): error getting project's
2025-06-22T00:36:57.9042378Z         limits (68574efcab82446d9bfb0e33):
2025-06-22T00:36:57.9042934Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574efcab82446d9bfb0e33/limits
2025-06-22T00:36:57.9043592Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-22T00:36:57.9044176Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T00:36:57.9044563Z         BadRequestDetail: 
2025-06-22T00:36:57.9044874Z --- FAIL: TestAccProjectDSProjectInvitation_basic (32.82s)
```
### 2025-06-23
#### PASS 7 seconds
```
2025-06-23T00:33:38.2274248Z === RUN   TestAccProjectDSProjectInvitation_basic
2025-06-23T00:33:38.2274628Z --- PASS: TestAccProjectDSProjectInvitation_basic (7.44s)
```
### 2025-06-24
#### PASS 8 seconds
```
2025-06-24T00:34:16.6823356Z === RUN   TestAccProjectDSProjectInvitation_basic
2025-06-24T00:34:16.6823743Z --- PASS: TestAccProjectDSProjectInvitation_basic (8.07s)
```
### 2025-06-25
#### PASS 10 seconds
```
2025-06-25T00:34:38.2675756Z === RUN   TestAccProjectDSProjectInvitation_basic
2025-06-25T00:34:38.2676147Z --- PASS: TestAccProjectDSProjectInvitation_basic (10.00s)
```
### 2025-06-26
#### PASS 7 seconds
```
2025-06-26T00:33:55.8057348Z === RUN   TestAccProjectDSProjectInvitation_basic
2025-06-26T00:33:55.8057739Z --- PASS: TestAccProjectDSProjectInvitation_basic (7.91s)
```