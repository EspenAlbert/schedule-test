# stream/streaminstance/TestMigStreamRSStreamInstance_basic Test Details
# Found 132 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 127) FAIL(x 5)
Success rate: 96.21%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-04-16 00:45 | dev | 7.04s
2025-04-16 12:49 | qa | 9.07s
2025-04-16 14:37 | dev | 9.01s
2025-04-17 00:44 | dev | 6.06s
2025-05-11 00:29 | qa | 0.00s

## Timeline
2025-03-11: MISSING
2025-03-12: MISSING
2025-03-13: MISSING
2025-03-14: MISSING
2025-03-15: MISSING
2025-03-16: MISSING
2025-03-17: MISSING
2025-03-18: MISSING
2025-03-19: MISSING
2025-03-20: MISSING
2025-03-21: MISSING
2025-03-22: MISSING
2025-03-23: MISSING
2025-03-24: MISSING
2025-03-25: MISSING
2025-03-26: MISSING
2025-03-27: MISSING
2025-03-28: MISSING
2025-03-29: MISSING
2025-03-30: MISSING
2025-03-31: MISSING
2025-04-01: MISSING
2025-04-02: MISSING
2025-04-03: MISSING
2025-04-04: MISSING
2025-04-05: MISSING
2025-04-06: MISSING
2025-04-07: MISSING
2025-04-08: MISSING
2025-04-09: MISSING
2025-04-10: MISSING
### 2025-04-11
#### PASS 6 seconds
### 2025-04-12
#### PASS 6 seconds
### 2025-04-13
#### PASS 6 seconds
### 2025-04-14
#### PASS 8 seconds
### 2025-04-15
#### PASS 6 seconds
### 2025-04-16
#### FAIL 7 seconds
```
2025-04-16T00:45:12.3266857Z === RUN   TestMigStreamRSStreamInstance_basic
2025-04-16T00:45:12.3269284Z === CONT  TestMigStreamRSStreamInstance_basic
2025-04-16T00:45:12.3368998Z === NAME  TestMigStreamRSStreamInstance_basic
2025-04-16T00:45:12.3369710Z     resource_stream_instance_migration_test.go:21: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T00:45:12.3370233Z         
2025-04-16T00:45:12.3370523Z         Error: error during resource delete
2025-04-16T00:45:12.3370802Z         
2025-04-16T00:45:12.3371481Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67fef9628a1bc7379cddabb6/streams/test-acc-tf-983304977643503851
2025-04-16T00:45:12.3372256Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T00:45:12.3372850Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T00:45:12.3373379Z         BadRequestDetail: 
2025-04-16T00:45:12.3373682Z --- FAIL: TestMigStreamRSStreamInstance_basic (7.36s)
```
#### FAIL 9 seconds
```
2025-04-16T12:49:32.8322877Z === RUN   TestMigStreamRSStreamInstance_basic
2025-04-16T12:49:32.8325316Z === CONT  TestMigStreamRSStreamInstance_basic
2025-04-16T12:49:32.8424615Z === NAME  TestMigStreamRSStreamInstance_basic
2025-04-16T12:49:32.8425374Z     resource_stream_instance_migration_test.go:21: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T12:49:32.8425934Z         
2025-04-16T12:49:32.8426245Z         Error: error during resource delete
2025-04-16T12:49:32.8426709Z         
2025-04-16T12:49:32.8427413Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/67ffa2d9c46bf3681fc52244/streams/test-acc-tf-2919177830923355920
2025-04-16T12:49:32.8428191Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T12:49:32.8428802Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T12:49:32.8429379Z         BadRequestDetail: 
2025-04-16T12:49:32.8429700Z --- FAIL: TestMigStreamRSStreamInstance_basic (9.73s)
```
#### FAIL 9 seconds
```
2025-04-16T14:37:27.0314788Z === RUN   TestMigStreamRSStreamInstance_basic
2025-04-16T14:37:27.0317328Z === CONT  TestMigStreamRSStreamInstance_basic
2025-04-16T14:37:27.0406895Z === NAME  TestMigStreamRSStreamInstance_basic
2025-04-16T14:37:27.0407611Z     resource_stream_instance_migration_test.go:21: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T14:37:27.0408154Z         
2025-04-16T14:37:27.0408447Z         Error: error during resource delete
2025-04-16T14:37:27.0408720Z         
2025-04-16T14:37:27.0409408Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67ffbd1651a0bf7e379212ce/streams/test-acc-tf-8648684255898821460
2025-04-16T14:37:27.0410195Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T14:37:27.0410794Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T14:37:27.0411207Z         BadRequestDetail: 
2025-04-16T14:37:27.0411514Z --- FAIL: TestMigStreamRSStreamInstance_basic (9.11s)
```
### 2025-04-17
#### FAIL 6 seconds
```
2025-04-17T00:44:44.9302420Z === RUN   TestMigStreamRSStreamInstance_basic
2025-04-17T00:44:44.9304959Z === CONT  TestMigStreamRSStreamInstance_basic
2025-04-17T00:44:44.9393290Z === NAME  TestMigStreamRSStreamInstance_basic
2025-04-17T00:44:44.9394008Z     resource_stream_instance_migration_test.go:21: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-17T00:44:44.9394545Z         
2025-04-17T00:44:44.9394840Z         Error: error during resource delete
2025-04-17T00:44:44.9395119Z         
2025-04-17T00:44:44.9395810Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68004ac9a693d5155b4ed1c8/streams/test-acc-tf-1202189213403507826
2025-04-17T00:44:44.9396596Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-17T00:44:44.9397202Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-17T00:44:44.9397615Z         BadRequestDetail: 
2025-04-17T00:44:44.9397923Z --- FAIL: TestMigStreamRSStreamInstance_basic (6.63s)
```
### 2025-04-18
#### PASS 10 seconds
### 2025-04-19
#### PASS 8 seconds
### 2025-04-20
#### PASS 8 seconds
### 2025-04-21
#### PASS 10 seconds
### 2025-04-22
#### PASS 9 seconds
### 2025-04-23
#### PASS 6 seconds
### 2025-04-24
#### PASS 8 seconds
### 2025-04-25
#### PASS 6 seconds
### 2025-04-26
#### PASS 10 seconds
### 2025-04-27
#### PASS 7 seconds
### 2025-04-28
#### PASS 7 seconds
### 2025-04-29
#### PASS 6 seconds
### 2025-04-30
#### PASS 8 seconds
#### PASS 7 seconds
### 2025-05-01
#### PASS 6 seconds
#### PASS 7 seconds
#### PASS 8 seconds
#### PASS 6 seconds
#### PASS 8 seconds
#### PASS 6 seconds
#### PASS 11 seconds
### 2025-05-02
#### PASS 6 seconds
### 2025-05-03
#### PASS 6 seconds
### 2025-05-04
#### PASS 7 seconds
### 2025-05-05
#### PASS 6 seconds
#### PASS 7 seconds
### 2025-05-06
#### PASS 7 seconds
### 2025-05-07
#### PASS 9 seconds
#### PASS 8 seconds
#### PASS 7 seconds
#### PASS 9 seconds
### 2025-05-08
#### PASS 8 seconds
### 2025-05-09
#### PASS 8 seconds
### 2025-05-10
#### PASS 6 seconds
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:29:58.8382491Z === RUN   TestMigStreamRSStreamInstance_basic
2025-05-11T00:29:58.8383671Z     resource_stream_instance_migration_test.go:15: Creating execution project: test-acc-tf-p-1382373229131679163
2025-05-11T00:29:58.8384717Z     resource_stream_instance_migration_test.go:15: 
2025-05-11T00:29:58.8386436Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:58.8389300Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:29:58.8393030Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streaminstance/resource_stream_instance_migration_test.go:15
2025-05-11T00:29:58.8394595Z         	Error:      	Received unexpected error:
2025-05-11T00:29:58.8396188Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:58.8397197Z         	Test:       	TestMigStreamRSStreamInstance_basic
2025-05-11T00:29:58.8399026Z         	Messages:   	Project creation failed: test-acc-tf-p-1382373229131679163, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:58.8400484Z --- FAIL: TestMigStreamRSStreamInstance_basic (0.02s)
```
### 2025-05-12
#### PASS 8 seconds
### 2025-05-13
#### PASS 7 seconds
#### PASS 6 seconds
### 2025-05-14
#### PASS 6 seconds
### 2025-05-15
#### PASS 9 seconds
### 2025-05-16
#### PASS 6 seconds
### 2025-05-17
#### PASS 7 seconds
### 2025-05-18
#### PASS 8 seconds
### 2025-05-19
#### PASS 9 seconds
### 2025-05-20
#### PASS 7 seconds
#### PASS 9 seconds
### 2025-05-21
#### PASS 8 seconds
### 2025-05-22
#### PASS 8 seconds
#### PASS 8 seconds
#### PASS 6 seconds
### 2025-05-23
#### PASS 8 seconds
### 2025-05-24
#### PASS 6 seconds
### 2025-05-25
#### PASS 6 seconds
### 2025-05-26
#### PASS 9 seconds
### 2025-05-27
#### PASS 6 seconds
#### PASS 6 seconds
### 2025-05-28
#### PASS 8 seconds
#### PASS 7 seconds
### 2025-05-29
#### PASS 6 seconds
#### PASS 9 seconds
### 2025-05-30
#### PASS 6 seconds
#### PASS 8 seconds
### 2025-05-31
#### PASS 6 seconds
### 2025-06-01
#### PASS 9 seconds
#### PASS 6 seconds
#### PASS 6 seconds
#### PASS 7 seconds
#### PASS 9 seconds
#### PASS 6 seconds
#### PASS 6 seconds
### 2025-06-02
#### PASS 8 seconds
#### PASS 8 seconds
#### PASS 11 seconds
### 2025-06-03
#### PASS 7 seconds
#### PASS 8 seconds
#### PASS 7 seconds
### 2025-06-04
#### PASS 8 seconds
### 2025-06-05
#### PASS 5 seconds
### 2025-06-06
#### PASS 10 seconds
### 2025-06-07
#### PASS 5 seconds
### 2025-06-08
#### PASS 4 seconds
### 2025-06-09
#### PASS 5 seconds
### 2025-06-10
#### PASS 6 seconds
### 2025-06-11
#### PASS 4 seconds
#### PASS 6 seconds
### 2025-06-12
#### PASS 6 seconds
### 2025-06-13
#### PASS 9 seconds
### 2025-06-14
#### PASS 6 seconds
### 2025-06-15
#### PASS 7 seconds
### 2025-06-16
#### PASS 5 seconds
### 2025-06-17
#### PASS 5 seconds
### 2025-06-18
#### PASS 6 seconds
#### PASS 6 seconds
### 2025-06-19
#### PASS 4 seconds
### 2025-06-20
#### PASS 5 seconds
### 2025-06-21
#### PASS 5 seconds
### 2025-06-22
#### PASS 6 seconds
### 2025-06-23
#### PASS 6 seconds
### 2025-06-24
#### PASS 5 seconds
### 2025-06-25
#### PASS 5 seconds
#### PASS 5 seconds
### 2025-06-26
#### PASS 5 seconds
#### PASS 5 seconds
### 2025-06-27
#### PASS 5 seconds
### 2025-06-28
#### PASS 7 seconds
### 2025-06-29
#### PASS 5 seconds
### 2025-06-30
#### PASS 6 seconds
### 2025-07-01
#### PASS 7 seconds
#### PASS 4 seconds
#### PASS 6 seconds
#### PASS 4 seconds
#### PASS 7 seconds
#### PASS 7 seconds
#### PASS 4 seconds
#### PASS 6 seconds
### 2025-07-02
#### PASS 5 seconds
### 2025-07-03
#### PASS 5 seconds
### 2025-07-04
#### PASS 5 seconds
### 2025-07-05
#### PASS 6 seconds
### 2025-07-06
#### PASS 5 seconds
### 2025-07-07
#### PASS 4 seconds
### 2025-07-08
#### PASS 5 seconds
### 2025-07-09
#### PASS 4 seconds