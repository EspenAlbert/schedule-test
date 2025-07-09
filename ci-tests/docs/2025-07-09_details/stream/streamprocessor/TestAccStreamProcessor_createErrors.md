# stream/streamprocessor/TestAccStreamProcessor_createErrors Test Details
# Found 132 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 127) FAIL(x 5)
Success rate: 96.21%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-04-16 00:45 | dev | 1.04s
2025-04-16 12:49 | qa | 3.02s
2025-04-16 14:37 | dev | 1.08s
2025-04-17 00:44 | dev | 1.04s
2025-05-11 00:30 | qa | 0.00s

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
#### PASS a second
### 2025-04-12
#### PASS a second
### 2025-04-13
#### PASS a second
### 2025-04-14
#### PASS a second
### 2025-04-15
#### PASS a second
### 2025-04-16
#### FAIL a second
```
2025-04-16T00:45:12.3757452Z === RUN   TestAccStreamProcessor_createErrors
2025-04-16T00:45:12.3757948Z === CONT  TestAccStreamProcessor_createErrors
2025-04-16T00:45:12.3799420Z === NAME  TestAccStreamProcessor_createErrors
2025-04-16T00:45:12.3799829Z     resource_test.go:284: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T00:45:12.3799923Z         
2025-04-16T00:45:12.3800095Z         Error: error deleting resource
2025-04-16T00:45:12.3800187Z         
2025-04-16T00:45:12.3801091Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67fef96383625331ad35237f/streams/test-acc-tf-5285088126074252571/connections/sample_stream_solar
2025-04-16T00:45:12.3801433Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T00:45:12.3801765Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T00:45:12.3801915Z         BadRequestDetail: 
2025-04-16T00:45:12.3802072Z --- FAIL: TestAccStreamProcessor_createErrors (1.43s)
```
#### FAIL 3 seconds
```
2025-04-16T12:49:32.8819373Z === RUN   TestAccStreamProcessor_createErrors
2025-04-16T12:49:32.8820174Z === CONT  TestAccStreamProcessor_createErrors
2025-04-16T12:49:32.8872935Z === NAME  TestAccStreamProcessor_createErrors
2025-04-16T12:49:32.8873372Z     resource_test.go:284: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T12:49:32.8873472Z         
2025-04-16T12:49:32.8873652Z         Error: error deleting resource
2025-04-16T12:49:32.8873750Z         
2025-04-16T12:49:32.8874671Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/67ffa2daaeda942dc8ba2ae5/streams/test-acc-tf-7381945493789707048/connections/sample_stream_solar
2025-04-16T12:49:32.8875010Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T12:49:32.8875337Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T12:49:32.8875485Z         BadRequestDetail: 
2025-04-16T12:49:32.8875648Z --- FAIL: TestAccStreamProcessor_createErrors (3.23s)
```
#### FAIL a second
```
2025-04-16T14:37:27.0811121Z === RUN   TestAccStreamProcessor_createErrors
2025-04-16T14:37:27.0811731Z === CONT  TestAccStreamProcessor_createErrors
2025-04-16T14:37:27.0859160Z === NAME  TestAccStreamProcessor_createErrors
2025-04-16T14:37:27.0859585Z     resource_test.go:284: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T14:37:27.0859683Z         
2025-04-16T14:37:27.0859862Z         Error: error deleting resource
2025-04-16T14:37:27.0859951Z         
2025-04-16T14:37:27.0860735Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67ffbd1751a0bf7e37921337/streams/test-acc-tf-5283141877620864157/connections/sample_stream_solar
2025-04-16T14:37:27.0861074Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T14:37:27.0861558Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T14:37:27.0861709Z         BadRequestDetail: 
2025-04-16T14:37:27.0861869Z --- FAIL: TestAccStreamProcessor_createErrors (1.79s)
```
### 2025-04-17
#### FAIL a second
```
2025-04-17T00:44:44.9784854Z === RUN   TestAccStreamProcessor_createErrors
2025-04-17T00:44:44.9785512Z === CONT  TestAccStreamProcessor_createErrors
2025-04-17T00:44:44.9845490Z === NAME  TestAccStreamProcessor_createErrors
2025-04-17T00:44:44.9845900Z     resource_test.go:284: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-17T00:44:44.9846104Z         
2025-04-17T00:44:44.9846285Z         Error: error deleting resource
2025-04-17T00:44:44.9846380Z         
2025-04-17T00:44:44.9847160Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68004acb5feb172e558c5f56/streams/test-acc-tf-1422148289676450126/connections/sample_stream_solar
2025-04-17T00:44:44.9847502Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-17T00:44:44.9847835Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-17T00:44:44.9847982Z         BadRequestDetail: 
2025-04-17T00:44:44.9848244Z --- FAIL: TestAccStreamProcessor_createErrors (1.44s)
```
### 2025-04-18
#### PASS 2 seconds
### 2025-04-19
#### PASS a second
### 2025-04-20
#### PASS a second
### 2025-04-21
#### PASS 2 seconds
### 2025-04-22
#### PASS a second
### 2025-04-23
#### PASS a second
### 2025-04-24
#### PASS 2 seconds
### 2025-04-25
#### PASS a second
### 2025-04-26
#### PASS 4 seconds
### 2025-04-27
#### PASS a second
### 2025-04-28
#### PASS a second
### 2025-04-29
#### PASS a second
### 2025-04-30
#### PASS a second
#### PASS a second
### 2025-05-01
#### PASS 4 seconds
#### PASS a second
#### PASS a second
#### PASS a second
#### PASS a second
#### PASS a second
#### PASS a second
### 2025-05-02
#### PASS a second
### 2025-05-03
#### PASS a second
### 2025-05-04
#### PASS 3 seconds
### 2025-05-05
#### PASS a second
#### PASS a second
### 2025-05-06
#### PASS a second
### 2025-05-07
#### PASS 2 seconds
#### PASS a second
#### PASS a second
#### PASS 2 seconds
### 2025-05-08
#### PASS a second
### 2025-05-09
#### PASS a second
### 2025-05-10
#### PASS a second
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:30:00.1169523Z === RUN   TestAccStreamProcessor_createErrors
2025-05-11T00:30:00.1170808Z     resource_test.go:278: Creating execution project: test-acc-tf-p-8026630189817718175
2025-05-11T00:30:00.1171514Z     resource_test.go:278: 
2025-05-11T00:30:00.1172890Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:00.1175229Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:30:00.1177582Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:278
2025-05-11T00:30:00.1178545Z         	Error:      	Received unexpected error:
2025-05-11T00:30:00.1179677Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:00.1180360Z         	Test:       	TestAccStreamProcessor_createErrors
2025-05-11T00:30:00.1181542Z         	Messages:   	Project creation failed: test-acc-tf-p-8026630189817718175, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:00.1182497Z --- FAIL: TestAccStreamProcessor_createErrors (0.02s)
```
### 2025-05-12
#### PASS a second
### 2025-05-13
#### PASS a second
#### PASS a second
### 2025-05-14
#### PASS a second
### 2025-05-15
#### PASS a second
### 2025-05-16
#### PASS a second
### 2025-05-17
#### PASS a second
### 2025-05-18
#### PASS 2 seconds
### 2025-05-19
#### PASS 2 seconds
### 2025-05-20
#### PASS a second
#### PASS a second
### 2025-05-21
#### PASS 2 seconds
### 2025-05-22
#### PASS a second
#### PASS a second
#### PASS a second
### 2025-05-23
#### PASS 2 seconds
### 2025-05-24
#### PASS a second
### 2025-05-25
#### PASS a second
### 2025-05-26
#### PASS 2 seconds
### 2025-05-27
#### PASS a second
#### PASS a second
### 2025-05-28
#### PASS 2 seconds
#### PASS a second
### 2025-05-29
#### PASS a second
#### PASS 2 seconds
### 2025-05-30
#### PASS a second
#### PASS a second
### 2025-05-31
#### PASS a second
### 2025-06-01
#### PASS 2 seconds
#### PASS 2 seconds
#### PASS a second
#### PASS a second
#### PASS 2 seconds
#### PASS a second
#### PASS a second
### 2025-06-02
#### PASS 2 seconds
#### PASS 2 seconds
#### PASS a second
### 2025-06-03
#### PASS a second
#### PASS a second
#### PASS a second
### 2025-06-04
#### PASS 2 seconds
### 2025-06-05
#### PASS a second
### 2025-06-06
#### PASS a second
### 2025-06-07
#### PASS a second
### 2025-06-08
#### PASS a second
### 2025-06-09
#### PASS a second
### 2025-06-10
#### PASS 2 seconds
### 2025-06-11
#### PASS a second
#### PASS 2 seconds
### 2025-06-12
#### PASS a second
### 2025-06-13
#### PASS 2 seconds
### 2025-06-14
#### PASS a second
### 2025-06-15
#### PASS 2 seconds
### 2025-06-16
#### PASS a second
### 2025-06-17
#### PASS a second
### 2025-06-18
#### PASS 2 seconds
#### PASS a second
### 2025-06-19
#### PASS a second
### 2025-06-20
#### PASS a second
### 2025-06-21
#### PASS a second
### 2025-06-22
#### PASS 2 seconds
### 2025-06-23
#### PASS 2 seconds
### 2025-06-24
#### PASS a second
### 2025-06-25
#### PASS a second
#### PASS a second
### 2025-06-26
#### PASS a second
#### PASS a second
### 2025-06-27
#### PASS a second
### 2025-06-28
#### PASS 2 seconds
### 2025-06-29
#### PASS a second
### 2025-06-30
#### PASS 2 seconds
### 2025-07-01
#### PASS 2 seconds
#### PASS a second
#### PASS 2 seconds
#### PASS a second
#### PASS 2 seconds
#### PASS 2 seconds
#### PASS a second
#### PASS a second
### 2025-07-02
#### PASS a second
### 2025-07-03
#### PASS a second
### 2025-07-04
#### PASS a second
### 2025-07-05
#### PASS a second
### 2025-07-06
#### PASS a second
### 2025-07-07
#### PASS a second
### 2025-07-08
#### PASS a second
### 2025-07-09
#### PASS a second