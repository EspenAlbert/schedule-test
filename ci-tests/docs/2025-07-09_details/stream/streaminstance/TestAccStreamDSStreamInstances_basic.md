# stream/streaminstance/TestAccStreamDSStreamInstances_basic Test Details
# Found 132 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 126) FAIL(x 6)
Success rate: 95.45%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-04-16 00:45 | dev | 3.03s
2025-04-16 12:49 | qa | 3.09s
2025-04-16 14:37 | dev | 3.09s
2025-04-17 00:44 | dev | 3.01s
2025-05-11 00:29 | qa | 0.00s
2025-06-22 00:49 | qa | 31.00s

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
#### PASS 3 seconds
### 2025-04-12
#### PASS 3 seconds
### 2025-04-13
#### PASS 3 seconds
### 2025-04-14
#### PASS 3 seconds
### 2025-04-15
#### PASS 3 seconds
### 2025-04-16
#### FAIL 3 seconds
```
2025-04-16T00:45:12.3265280Z === RUN   TestAccStreamDSStreamInstances_basic
2025-04-16T00:45:12.3270713Z === CONT  TestAccStreamDSStreamInstances_basic
2025-04-16T00:45:12.3293301Z   
2025-04-16T00:45:12.3294241Z     data_source_stream_instances_test.go:26: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T00:45:12.3294786Z         
2025-04-16T00:45:12.3295095Z         Error: error during resource delete
2025-04-16T00:45:12.3295395Z         
2025-04-16T00:45:12.3296099Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67fef9628a1bc7379cddabb6/streams/test-acc-tf-238720612256182379
2025-04-16T00:45:12.3296875Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T00:45:12.3297472Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T00:45:12.3297877Z         BadRequestDetail: 
2025-04-16T00:45:12.3298186Z --- FAIL: TestAccStreamDSStreamInstances_basic (3.28s)
```
#### FAIL 3 seconds
```
2025-04-16T12:49:32.8321420Z === RUN   TestAccStreamDSStreamInstances_basic
2025-04-16T12:49:32.8326732Z === CONT  TestAccStreamDSStreamInstances_basic
2025-04-16T12:49:32.8337109Z   
2025-04-16T12:49:32.8337689Z     data_source_stream_instances_test.go:26: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T12:49:32.8338196Z         
2025-04-16T12:49:32.8338494Z         Error: error during resource delete
2025-04-16T12:49:32.8338767Z         
2025-04-16T12:49:32.8339657Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/67ffa2d9c46bf3681fc52244/streams/test-acc-tf-6870145828481477080
2025-04-16T12:49:32.8340430Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T12:49:32.8341026Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T12:49:32.8341447Z         BadRequestDetail: 
2025-04-16T12:49:32.8341754Z --- FAIL: TestAccStreamDSStreamInstances_basic (3.88s)
```
#### FAIL 3 seconds
```
2025-04-16T14:37:27.0313152Z === RUN   TestAccStreamDSStreamInstances_basic
2025-04-16T14:37:27.0318026Z === CONT  TestAccStreamDSStreamInstances_basic
2025-04-16T14:37:27.0345228Z === NAME  TestAccStreamDSStreamInstances_basic
2025-04-16T14:37:27.0345933Z     data_source_stream_instances_test.go:26: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T14:37:27.0346448Z         
2025-04-16T14:37:27.0346742Z         Error: error during resource delete
2025-04-16T14:37:27.0347016Z         
2025-04-16T14:37:27.0347705Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67ffbd1651a0bf7e379212ce/streams/test-acc-tf-4055435603180378298
2025-04-16T14:37:27.0348486Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T14:37:27.0349090Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T14:37:27.0349507Z         BadRequestDetail: 
2025-04-16T14:37:27.0349814Z --- FAIL: TestAccStreamDSStreamInstances_basic (3.87s)
```
### 2025-04-17
#### FAIL 3 seconds
```
2025-04-17T00:44:44.9300974Z === RUN   TestAccStreamDSStreamInstances_basic
2025-04-17T00:44:44.9306039Z === CONT  TestAccStreamDSStreamInstances_basic
2025-04-17T00:44:44.9332262Z === NAME  TestAccStreamDSStreamInstances_basic
2025-04-17T00:44:44.9332971Z     data_source_stream_instances_test.go:26: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-17T00:44:44.9333481Z         
2025-04-17T00:44:44.9333774Z         Error: error during resource delete
2025-04-17T00:44:44.9334049Z         
2025-04-17T00:44:44.9334738Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68004ac9a693d5155b4ed1c8/streams/test-acc-tf-5328605479192124771
2025-04-17T00:44:44.9335517Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-17T00:44:44.9336123Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-17T00:44:44.9336539Z         BadRequestDetail: 
2025-04-17T00:44:44.9336846Z --- FAIL: TestAccStreamDSStreamInstances_basic (3.08s)
```
### 2025-04-18
#### PASS 5 seconds
### 2025-04-19
#### PASS 3 seconds
### 2025-04-20
#### PASS 3 seconds
### 2025-04-21
#### PASS 3 seconds
### 2025-04-22
#### PASS 3 seconds
### 2025-04-23
#### PASS 3 seconds
### 2025-04-24
#### PASS 3 seconds
### 2025-04-25
#### PASS 3 seconds
### 2025-04-26
#### PASS 4 seconds
### 2025-04-27
#### PASS 3 seconds
### 2025-04-28
#### PASS 3 seconds
### 2025-04-29
#### PASS 3 seconds
### 2025-04-30
#### PASS 3 seconds
#### PASS 3 seconds
### 2025-05-01
#### PASS 3 seconds
#### PASS 3 seconds
#### PASS 3 seconds
#### PASS 3 seconds
#### PASS 3 seconds
#### PASS 2 seconds
#### PASS 3 seconds
### 2025-05-02
#### PASS 3 seconds
### 2025-05-03
#### PASS 3 seconds
### 2025-05-04
#### PASS 3 seconds
### 2025-05-05
#### PASS 2 seconds
#### PASS 3 seconds
### 2025-05-06
#### PASS 3 seconds
### 2025-05-07
#### PASS 3 seconds
#### PASS 3 seconds
#### PASS 3 seconds
#### PASS 4 seconds
### 2025-05-08
#### PASS 3 seconds
### 2025-05-09
#### PASS 3 seconds
### 2025-05-10
#### PASS 3 seconds
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:29:58.8284839Z === RUN   TestAccStreamDSStreamInstances_basic
2025-05-11T00:29:58.8286177Z     data_source_stream_instances_test.go:15: Creating execution project: test-acc-tf-p-6323553150611890
2025-05-11T00:29:58.8287147Z     data_source_stream_instances_test.go:15: 
2025-05-11T00:29:58.8288849Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:58.8352352Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:29:58.8356200Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streaminstance/data_source_stream_instances_test.go:15
2025-05-11T00:29:58.8357675Z         	Error:      	Received unexpected error:
2025-05-11T00:29:58.8359190Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:58.8360130Z         	Test:       	TestAccStreamDSStreamInstances_basic
2025-05-11T00:29:58.8361827Z         	Messages:   	Project creation failed: test-acc-tf-p-6323553150611890, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:58.8363202Z --- FAIL: TestAccStreamDSStreamInstances_basic (0.02s)
```
### 2025-05-12
#### PASS 3 seconds
### 2025-05-13
#### PASS 3 seconds
#### PASS 3 seconds
### 2025-05-14
#### PASS 3 seconds
### 2025-05-15
#### PASS 3 seconds
### 2025-05-16
#### PASS 3 seconds
### 2025-05-17
#### PASS 3 seconds
### 2025-05-18
#### PASS 4 seconds
### 2025-05-19
#### PASS 4 seconds
### 2025-05-20
#### PASS 3 seconds
#### PASS 4 seconds
### 2025-05-21
#### PASS 3 seconds
### 2025-05-22
#### PASS 4 seconds
#### PASS 3 seconds
#### PASS 2 seconds
### 2025-05-23
#### PASS 3 seconds
### 2025-05-24
#### PASS 3 seconds
### 2025-05-25
#### PASS 3 seconds
### 2025-05-26
#### PASS 4 seconds
### 2025-05-27
#### PASS 3 seconds
#### PASS 3 seconds
### 2025-05-28
#### PASS 3 seconds
#### PASS 3 seconds
### 2025-05-29
#### PASS 3 seconds
#### PASS 4 seconds
### 2025-05-30
#### PASS 3 seconds
#### PASS 4 seconds
### 2025-05-31
#### PASS 3 seconds
### 2025-06-01
#### PASS 3 seconds
#### PASS 3 seconds
#### PASS 3 seconds
#### PASS 3 seconds
#### PASS 4 seconds
#### PASS 3 seconds
#### PASS 3 seconds
### 2025-06-02
#### PASS 4 seconds
#### PASS 4 seconds
#### PASS 3 seconds
### 2025-06-03
#### PASS 3 seconds
#### PASS 4 seconds
#### PASS 3 seconds
### 2025-06-04
#### PASS 3 seconds
### 2025-06-05
#### PASS 2 seconds
### 2025-06-06
#### PASS 2 seconds
### 2025-06-07
#### PASS 2 seconds
### 2025-06-08
#### PASS 2 seconds
### 2025-06-09
#### PASS 2 seconds
### 2025-06-10
#### PASS 3 seconds
### 2025-06-11
#### PASS 2 seconds
#### PASS 2 seconds
### 2025-06-12
#### PASS 2 seconds
### 2025-06-13
#### PASS 5 seconds
### 2025-06-14
#### PASS 2 seconds
### 2025-06-15
#### PASS 3 seconds
### 2025-06-16
#### PASS 2 seconds
### 2025-06-17
#### PASS 2 seconds
### 2025-06-18
#### PASS 3 seconds
#### PASS 2 seconds
### 2025-06-19
#### PASS 2 seconds
### 2025-06-20
#### PASS 2 seconds
### 2025-06-21
#### PASS 2 seconds
### 2025-06-22
#### FAIL 31 seconds
```
2025-06-22T00:49:55.8274414Z === RUN   TestAccStreamDSStreamInstances_basic
2025-06-22T00:49:55.8280260Z === CONT  TestAccStreamDSStreamInstances_basic
2025-06-22T00:49:55.8309098Z === NAME  TestAccStreamDSStreamInstances_basic
2025-06-22T00:49:55.8309787Z     data_source_stream_instances_test.go:26: Step 1/1 error: Error running apply: exit status 1
2025-06-22T00:49:55.8310299Z         
2025-06-22T00:49:55.8310580Z         Error: error creating resource
2025-06-22T00:49:55.8310855Z         
2025-06-22T00:49:55.8311409Z           with mongodbatlas_stream_instance.test,
2025-06-22T00:49:55.8316716Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_stream_instance" "test":
2025-06-22T00:49:55.8317666Z           13: 		resource "mongodbatlas_stream_instance" "test" {
2025-06-22T00:49:55.8317993Z         
2025-06-22T00:49:55.8318646Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574efaaf7a0954e84ae4db/streams
2025-06-22T00:49:55.8319420Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-22T00:49:55.8320125Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T00:49:55.8320553Z         BadRequestDetail: 
2025-06-22T00:49:55.8325886Z --- FAIL: TestAccStreamDSStreamInstances_basic (31.00s)
```
### 2025-06-23
#### PASS 3 seconds
### 2025-06-24
#### PASS 2 seconds
### 2025-06-25
#### PASS 2 seconds
#### PASS 2 seconds
### 2025-06-26
#### PASS 2 seconds
#### PASS 2 seconds
### 2025-06-27
#### PASS 2 seconds
### 2025-06-28
#### PASS 3 seconds
### 2025-06-29
#### PASS 2 seconds
### 2025-06-30
#### PASS 3 seconds
### 2025-07-01
#### PASS 3 seconds
#### PASS 2 seconds
#### PASS 3 seconds
#### PASS 2 seconds
#### PASS 3 seconds
#### PASS 3 seconds
#### PASS 2 seconds
#### PASS 2 seconds
### 2025-07-02
#### PASS 2 seconds
### 2025-07-03
#### PASS 2 seconds
### 2025-07-04
#### PASS 2 seconds
### 2025-07-05
#### PASS 2 seconds
### 2025-07-06
#### PASS 2 seconds
### 2025-07-07
#### PASS 2 seconds
### 2025-07-08
#### PASS 2 seconds
### 2025-07-09
#### PASS 2 seconds