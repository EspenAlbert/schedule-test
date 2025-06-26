# project/project/TestMigProject_withTeams Test Details
# Found 39 TestRuns in dev, qa from 2025-05-28 to 2025-06-26 from master branch: 1 unique tests, PASS(x 38) FAIL
Success rate: 97.44%

## Timeline
2025-05-27: MISSING
### 2025-05-28
#### PASS 12 seconds
```
2025-05-28T00:40:31.0050039Z === RUN   TestMigProject_withTeams
2025-05-28T00:40:31.0050695Z --- PASS: TestMigProject_withTeams (12.91s)
```
#### PASS 10 seconds
```
2025-05-28T08:40:09.2634146Z === RUN   TestMigProject_withTeams
2025-05-28T08:40:09.2634541Z --- PASS: TestMigProject_withTeams (10.74s)
```
### 2025-05-29
#### PASS 13 seconds
```
2025-05-29T00:42:12.4970431Z === RUN   TestMigProject_withTeams
2025-05-29T00:42:12.4970837Z --- PASS: TestMigProject_withTeams (13.77s)
```
### 2025-05-30
#### PASS 11 seconds
```
2025-05-30T00:41:49.4520430Z === RUN   TestMigProject_withTeams
2025-05-30T00:41:49.4521018Z --- PASS: TestMigProject_withTeams (11.47s)
```
### 2025-05-31
#### PASS 10 seconds
```
2025-05-31T00:39:35.7940048Z === RUN   TestMigProject_withTeams
2025-05-31T00:39:35.7940520Z --- PASS: TestMigProject_withTeams (10.06s)
```
### 2025-06-01
#### PASS 11 seconds
```
2025-06-01T00:44:45.0644950Z === RUN   TestMigProject_withTeams
2025-06-01T00:44:45.0645409Z --- PASS: TestMigProject_withTeams (11.20s)
```
#### PASS 9 seconds
```
2025-06-01T04:53:00.6171894Z === RUN   TestMigProject_withTeams
2025-06-01T04:53:00.6172631Z --- PASS: TestMigProject_withTeams (9.98s)
```
#### PASS 10 seconds
```
2025-06-01T09:02:03.3838824Z === RUN   TestMigProject_withTeams
2025-06-01T09:02:03.3839368Z --- PASS: TestMigProject_withTeams (10.23s)
```
#### PASS 10 seconds
```
2025-06-01T13:11:21.1558332Z === RUN   TestMigProject_withTeams
2025-06-01T13:11:21.1558890Z --- PASS: TestMigProject_withTeams (10.10s)
```
#### PASS 10 seconds
```
2025-06-01T17:20:49.8500521Z === RUN   TestMigProject_withTeams
2025-06-01T17:20:49.8501009Z --- PASS: TestMigProject_withTeams (10.52s)
```
#### PASS 9 seconds
```
2025-06-01T21:28:25.8759771Z === RUN   TestMigProject_withTeams
2025-06-01T21:28:25.8760504Z --- PASS: TestMigProject_withTeams (9.75s)
```
### 2025-06-02
#### PASS 8 seconds
```
2025-06-02T00:42:03.4264679Z === RUN   TestMigProject_withTeams
2025-06-02T00:42:03.4265303Z --- PASS: TestMigProject_withTeams (8.59s)
```
#### PASS 17 seconds
```
2025-06-02T01:41:41.3884428Z === RUN   TestMigProject_withTeams
2025-06-02T01:41:41.3884959Z --- PASS: TestMigProject_withTeams (17.58s)
```
#### PASS 14 seconds
```
2025-06-02T05:53:31.5738648Z === RUN   TestMigProject_withTeams
2025-06-02T05:53:31.5739121Z --- PASS: TestMigProject_withTeams (14.11s)
```
### 2025-06-03
#### PASS 11 seconds
```
2025-06-03T00:41:25.4649946Z === RUN   TestMigProject_withTeams
2025-06-03T00:41:25.4650637Z --- PASS: TestMigProject_withTeams (11.18s)
```
### 2025-06-04
#### PASS 14 seconds
```
2025-06-04T00:34:02.8399341Z === RUN   TestMigProject_withTeams
2025-06-04T00:34:02.8399879Z --- PASS: TestMigProject_withTeams (14.12s)
```
### 2025-06-05
#### FAIL 5 seconds
```
2025-06-05T00:29:34.4888481Z === RUN   TestMigProject_withTeams
2025-06-05T00:29:34.4896083Z   
2025-06-05T00:29:34.4896585Z     resource_project_migration_test.go:63: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:29:34.4897017Z         
2025-06-05T00:29:34.4897441Z         Error: error creating project: test-acc-tf-p-7153184514845741073
2025-06-05T00:29:34.4897795Z         
2025-06-05T00:29:34.4898109Z           with mongodbatlas_project.test,
2025-06-05T00:29:34.4898715Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-06-05T00:29:34.4899279Z           14: 		resource "mongodbatlas_project" "test" {
2025-06-05T00:29:34.4899582Z         
2025-06-05T00:29:34.4900055Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:29:34.4900691Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:29:34.4901448Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:29:34.4901868Z --- FAIL: TestMigProject_withTeams (5.30s)
```
### 2025-06-06
#### PASS 15 seconds
```
2025-06-06T00:36:24.5992700Z === RUN   TestMigProject_withTeams
2025-06-06T00:36:24.5993309Z --- PASS: TestMigProject_withTeams (15.38s)
```
### 2025-06-07
#### PASS 10 seconds
```
2025-06-07T00:31:34.2946801Z === RUN   TestMigProject_withTeams
2025-06-07T00:31:34.2947157Z --- PASS: TestMigProject_withTeams (10.74s)
```
### 2025-06-08
#### PASS 12 seconds
```
2025-06-08T00:36:20.4529794Z === RUN   TestMigProject_withTeams
2025-06-08T00:36:20.4530137Z --- PASS: TestMigProject_withTeams (12.85s)
```
### 2025-06-09
#### PASS 15 seconds
```
2025-06-09T00:36:08.5650644Z === RUN   TestMigProject_withTeams
2025-06-09T00:36:08.5651059Z --- PASS: TestMigProject_withTeams (15.14s)
```
### 2025-06-10
#### PASS 13 seconds
```
2025-06-10T00:42:52.1761087Z === RUN   TestMigProject_withTeams
2025-06-10T00:42:52.1761609Z --- PASS: TestMigProject_withTeams (13.63s)
```
### 2025-06-11
#### PASS 10 seconds
```
2025-06-11T00:31:59.6246980Z === RUN   TestMigProject_withTeams
2025-06-11T00:31:59.6248510Z --- PASS: TestMigProject_withTeams (10.63s)
```
#### PASS 9 seconds
```
2025-06-11T07:39:33.7408342Z === RUN   TestMigProject_withTeams
2025-06-11T07:39:33.7409102Z --- PASS: TestMigProject_withTeams (9.01s)
```
### 2025-06-12
#### PASS 13 seconds
```
2025-06-12T00:33:16.4665743Z === RUN   TestMigProject_withTeams
2025-06-12T00:33:16.4666231Z --- PASS: TestMigProject_withTeams (13.76s)
```
### 2025-06-13
#### PASS 13 seconds
```
2025-06-13T00:33:55.1511260Z === RUN   TestMigProject_withTeams
2025-06-13T00:33:55.1512005Z --- PASS: TestMigProject_withTeams (13.70s)
```
### 2025-06-14
#### PASS 9 seconds
```
2025-06-14T00:31:25.2102379Z === RUN   TestMigProject_withTeams
2025-06-14T00:31:25.2103015Z --- PASS: TestMigProject_withTeams (9.82s)
```
### 2025-06-15
#### PASS 13 seconds
```
2025-06-15T00:36:14.3373936Z === RUN   TestMigProject_withTeams
2025-06-15T00:36:14.3374544Z --- PASS: TestMigProject_withTeams (13.29s)
```
### 2025-06-16
#### PASS 10 seconds
```
2025-06-16T00:33:20.2232265Z === RUN   TestMigProject_withTeams
2025-06-16T00:33:20.2232682Z --- PASS: TestMigProject_withTeams (10.89s)
```
### 2025-06-17
#### PASS 8 seconds
```
2025-06-17T00:31:50.0520867Z === RUN   TestMigProject_withTeams
2025-06-17T00:31:50.0521372Z --- PASS: TestMigProject_withTeams (8.77s)
```
### 2025-06-18
#### PASS 10 seconds
```
2025-06-18T00:31:48.4289378Z === RUN   TestMigProject_withTeams
2025-06-18T00:31:48.4289693Z --- PASS: TestMigProject_withTeams (10.60s)
```
### 2025-06-19
#### PASS 9 seconds
```
2025-06-19T00:31:58.4300264Z === RUN   TestMigProject_withTeams
2025-06-19T00:31:58.4300830Z --- PASS: TestMigProject_withTeams (9.96s)
```
### 2025-06-20
#### PASS 9 seconds
```
2025-06-20T00:32:00.0160613Z === RUN   TestMigProject_withTeams
2025-06-20T00:32:00.0160967Z --- PASS: TestMigProject_withTeams (9.71s)
```
### 2025-06-21
#### PASS 15 seconds
```
2025-06-21T00:34:00.9720427Z === RUN   TestMigProject_withTeams
2025-06-21T00:34:00.9720946Z --- PASS: TestMigProject_withTeams (15.06s)
```
### 2025-06-22
#### PASS 9 seconds
```
2025-06-22T00:36:57.8968466Z === RUN   TestMigProject_withTeams
2025-06-22T00:36:57.8968759Z --- PASS: TestMigProject_withTeams (9.27s)
```
### 2025-06-23
#### PASS 9 seconds
```
2025-06-23T00:33:38.2215806Z === RUN   TestMigProject_withTeams
2025-06-23T00:33:38.2216310Z --- PASS: TestMigProject_withTeams (9.17s)
```
### 2025-06-24
#### PASS 17 seconds
```
2025-06-24T00:34:16.6761095Z === RUN   TestMigProject_withTeams
2025-06-24T00:34:16.6761754Z --- PASS: TestMigProject_withTeams (17.07s)
```
### 2025-06-25
#### PASS 14 seconds
```
2025-06-25T00:34:38.2612642Z === RUN   TestMigProject_withTeams
2025-06-25T00:34:38.2612941Z --- PASS: TestMigProject_withTeams (14.56s)
```
### 2025-06-26
#### PASS 13 seconds
```
2025-06-26T00:33:55.7998638Z === RUN   TestMigProject_withTeams
2025-06-26T00:33:55.7998939Z --- PASS: TestMigProject_withTeams (13.32s)
```