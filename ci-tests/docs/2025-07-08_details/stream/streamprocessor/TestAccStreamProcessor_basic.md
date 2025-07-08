# stream/streamprocessor/TestAccStreamProcessor_basic Test Details
# Found 9 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 8) FAIL
Success rate: 88.89%

## Timeline
### 2025-07-01
#### PASS 8 seconds
#### PASS 11 seconds
### 2025-07-02
#### FAIL 31 seconds
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-07-02T00:46:31.920000+00:00-TestAccStreamProcessor_basic',confidence=1.0,ts_when='6 days ago')
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
### 2025-07-04
#### PASS 8 seconds
### 2025-07-05
#### PASS 12 seconds
### 2025-07-06
#### PASS 11 seconds
### 2025-07-07
#### PASS 9 seconds
### 2025-07-08
#### PASS 9 seconds