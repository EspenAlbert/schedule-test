# stream/streamprocessor/TestAccStreamProcessor_basic Test Details
# Found 10 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 9) FAIL
Success rate: 90.00%

## Timeline
### 2025-07-01
#### PASS 13 seconds
```
2025-07-01T08:50:28.2732117Z === RUN   TestAccStreamProcessor_basic
2025-07-01T08:50:28.2837246Z === CONT  TestAccStreamProcessor_basic
2025-07-01T08:50:28.2856350Z --- PASS: TestAccStreamProcessor_basic (13.62s)
```
#### PASS 8 seconds
```
2025-07-01T12:50:20.6072913Z === RUN   TestAccStreamProcessor_basic
2025-07-01T12:50:20.6127422Z === CONT  TestAccStreamProcessor_basic
2025-07-01T12:50:20.6137072Z --- PASS: TestAccStreamProcessor_basic (8.96s)
```
#### PASS 11 seconds
```
2025-07-01T17:50:24.3483046Z === RUN   TestAccStreamProcessor_basic
2025-07-01T17:50:24.3584310Z === CONT  TestAccStreamProcessor_basic
2025-07-01T17:50:24.3588001Z   diagnostic_detail=
2025-07-01T17:50:24.3591456Z    tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas tf_proto_version=6.9 tf_resource_type=mongodbatlas_stream_processor
2025-07-01T17:50:24.3599756Z --- PASS: TestAccStreamProcessor_basic (11.00s)
```
### 2025-07-02
#### FAIL 31 seconds
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-07-02T00:46:31.920000+00:00-TestAccStreamProcessor_basic',confidence=1.0,ts_when='5 days ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-07-02T00:46:31.9208602Z === RUN   TestAccStreamProcessor_basic
2025-07-02T00:46:31.9332708Z === CONT  TestAccStreamProcessor_basic
2025-07-02T00:46:31.9334216Z   diagnostic_detail=
2025-07-02T00:46:31.9336651Z    diagnostic_severity=ERROR diagnostic_summary="Invalid JSON String Value" tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas tf_rpc=ValidateResourceConfig diagnostic_attribute="AttributeName(\"pipeline\")"
2025-07-02T00:46:31.9383491Z === NAME  TestAccStreamProcessor_basic
2025-07-02T00:46:31.9383945Z     resource_test.go:40: Step 1/3 error: Error running apply: exit status 1
2025-07-02T00:46:31.9384301Z         
2025-07-02T00:46:31.9384565Z         Error: error creating resource
2025-07-02T00:46:31.9384821Z         
2025-07-02T00:46:31.9385177Z           with mongodbatlas_stream_processor.processor,
2025-07-02T00:46:31.9385875Z           on terraform_plugin_test.tf line 35, in resource "mongodbatlas_stream_processor" "processor":
2025-07-02T00:46:31.9386508Z           35: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-02T00:46:31.9386826Z         
2025-07-02T00:46:31.9387570Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68647d45ef5b3c2f1ae5eb8b/streams/test-acc-tf-2955293527965756213/processor
2025-07-02T00:46:31.9388518Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-02T00:46:31.9389156Z         Detail: Streams Processor with this name (new-processor) had a problem occur:
2025-07-02T00:46:31.9389814Z         failed to acquire resources for stream processor validation: internal error
2025-07-02T00:46:31.9390437Z         while provisioning resource from global resource manager. Reason: Bad
2025-07-02T00:46:31.9391040Z         Request. Params: [new-processor failed to acquire resources for stream
2025-07-02T00:46:31.9391684Z         processor validation: internal error while provisioning resource from global
2025-07-02T00:46:31.9392296Z         resource manager], BadRequestDetail: 
2025-07-02T00:46:31.9408150Z    test_step_number=1 test_name=TestAccStreamProcessor_clusterType
2025-07-02T00:46:31.9448426Z === NAME  TestAccStreamProcessor_basic
2025-07-02T00:46:31.9448976Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-02T00:46:31.9449402Z         
2025-07-02T00:46:31.9449668Z         Error: error deleting resource
2025-07-02T00:46:31.9449924Z         
2025-07-02T00:46:31.9450904Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68647d45ef5b3c2f1ae5eb8b/streams/test-acc-tf-2955293527965756213/connections/sample_stream_solar
2025-07-02T00:46:31.9451674Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-02T00:46:31.9452451Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-02T00:46:31.9453084Z         name test-acc-tf-2955293527965756213 has active processors, and cannot be
2025-07-02T00:46:31.9453687Z         changed. Reason: Forbidden. Params: [test-acc-tf-2955293527965756213],
2025-07-02T00:46:31.9454099Z         BadRequestDetail: 
2025-07-02T00:46:31.9454374Z --- FAIL: TestAccStreamProcessor_basic (31.43s)
```
### 2025-07-03
#### PASS 20 seconds
```
2025-07-03T00:46:39.9541177Z === RUN   TestAccStreamProcessor_basic
2025-07-03T00:46:39.9794045Z === CONT  TestAccStreamProcessor_basic
2025-07-03T00:46:39.9803753Z --- PASS: TestAccStreamProcessor_basic (20.93s)
```
### 2025-07-04
#### PASS 8 seconds
```
2025-07-04T00:51:07.7052809Z === RUN   TestAccStreamProcessor_basic
2025-07-04T00:51:07.7214348Z === CONT  TestAccStreamProcessor_basic
2025-07-04T00:51:07.7217424Z   diagnostic_detail=
2025-07-04T00:51:07.7219480Z   
2025-07-04T00:51:07.7223906Z --- PASS: TestAccStreamProcessor_basic (8.99s)
```
### 2025-07-05
#### PASS 12 seconds
```
2025-07-05T00:44:07.5868975Z === RUN   TestAccStreamProcessor_basic
2025-07-05T00:44:07.6142878Z === CONT  TestAccStreamProcessor_basic
2025-07-05T00:44:07.6144458Z   diagnostic_detail=
2025-07-05T00:44:07.6146877Z    tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas diagnostic_severity=ERROR diagnostic_summary="Invalid JSON String Value" diagnostic_attribute="AttributeName(\"pipeline\")" tf_req_id=45a604cc-1323-271f-6558-6df91d7a4dfc
2025-07-05T00:44:07.6151681Z --- PASS: TestAccStreamProcessor_basic (12.29s)
```
### 2025-07-06
#### PASS 11 seconds
```
2025-07-06T00:48:43.0077951Z === RUN   TestAccStreamProcessor_basic
2025-07-06T00:48:43.0302559Z === CONT  TestAccStreamProcessor_basic
2025-07-06T00:48:43.0311871Z --- PASS: TestAccStreamProcessor_basic (11.15s)
```
### 2025-07-07
#### PASS 9 seconds
```
2025-07-07T00:48:05.7811246Z === RUN   TestAccStreamProcessor_basic
2025-07-07T00:48:05.8095800Z === CONT  TestAccStreamProcessor_basic
2025-07-07T00:48:05.8097571Z   diagnostic_detail=
2025-07-07T00:48:05.8099838Z    diagnostic_severity=ERROR tf_rpc=ValidateResourceConfig diagnostic_summary="Invalid JSON String Value" tf_resource_type=mongodbatlas_stream_processor tf_req_id=1e28f3c4-1f15-3cd6-59c1-e3650605c5a4
2025-07-07T00:48:05.8104136Z --- PASS: TestAccStreamProcessor_basic (9.12s)
```
### 2025-07-08
#### PASS 9 seconds
```
2025-07-08T00:45:56.1164768Z === RUN   TestAccStreamProcessor_basic
2025-07-08T00:45:56.1511610Z === CONT  TestAccStreamProcessor_basic
2025-07-08T00:45:56.1517076Z   diagnostic_detail=
2025-07-08T00:45:56.1519883Z   
2025-07-08T00:45:56.1528096Z --- PASS: TestAccStreamProcessor_basic (9.38s)
```