# stream/streamprocessor/TestAccStreamProcessor_JSONWhiteSpaceFormat Test Details
# Found 9 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 8) FAIL
Success rate: 88.89%

## Timeline
### 2025-07-01
#### PASS 5 seconds
#### PASS 6 seconds
### 2025-07-02
#### FAIL 31 seconds
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-07-02T00:46:31.920000+00:00-TestAccStreamProcessor_JSONWhiteSpaceFormat',confidence=1.0,ts_when='6 days ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-07-02T00:46:31.9209678Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-07-02T00:46:31.9332379Z === CONT  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-07-02T00:46:31.9364564Z === NAME  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-07-02T00:46:31.9365180Z     resource_test.go:81: Step 1/1 error: Error running apply: exit status 1
2025-07-02T00:46:31.9365541Z         
2025-07-02T00:46:31.9365808Z         Error: error creating resource
2025-07-02T00:46:31.9366075Z         
2025-07-02T00:46:31.9366421Z           with mongodbatlas_stream_processor.processor,
2025-07-02T00:46:31.9367099Z           on terraform_plugin_test.tf line 35, in resource "mongodbatlas_stream_processor" "processor":
2025-07-02T00:46:31.9367744Z           35: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-02T00:46:31.9368068Z         
2025-07-02T00:46:31.9368810Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68647d45ef5b3c2f1ae5eb8b/streams/test-acc-tf-4492585392972472368/processor
2025-07-02T00:46:31.9369627Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-02T00:46:31.9370277Z         Detail: Streams Processor with this name (new-processor-json-unchanged) had a
2025-07-02T00:46:31.9370943Z         problem occur: failed to acquire resources for stream processor validation:
2025-07-02T00:46:31.9371609Z         internal error while provisioning resource from global resource manager.
2025-07-02T00:46:31.9372379Z         Reason: Bad Request. Params: [new-processor-json-unchanged failed to acquire
2025-07-02T00:46:31.9373028Z         resources for stream processor validation: internal error while provisioning
2025-07-02T00:46:31.9373603Z         resource from global resource manager], BadRequestDetail: 
2025-07-02T00:46:31.9382809Z    test_terraform_path=/home/runner/work/_temp/562e13ef-6059-4fe1-8ce4-2da40aa0a837/terraform test_working_directory=/tmp/plugintest735089358 test_step_number=1
2025-07-02T00:46:31.9430210Z === NAME  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-07-02T00:46:31.9430800Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-02T00:46:31.9431233Z         
2025-07-02T00:46:31.9431497Z         Error: error deleting resource
2025-07-02T00:46:31.9431872Z         
2025-07-02T00:46:31.9432754Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68647d45ef5b3c2f1ae5eb8b/streams/test-acc-tf-4492585392972472368/connections/sample_stream_solar
2025-07-02T00:46:31.9433523Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-02T00:46:31.9434054Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-02T00:46:31.9434685Z         name test-acc-tf-4492585392972472368 has active processors, and cannot be
2025-07-02T00:46:31.9435294Z         changed. Reason: Forbidden. Params: [test-acc-tf-4492585392972472368],
2025-07-02T00:46:31.9435820Z         BadRequestDetail: 
2025-07-02T00:46:31.9436151Z --- FAIL: TestAccStreamProcessor_JSONWhiteSpaceFormat (31.38s)
```
### 2025-07-03
#### PASS 8 seconds
### 2025-07-04
#### PASS 5 seconds
### 2025-07-05
#### PASS 7 seconds
### 2025-07-06
#### PASS 6 seconds
### 2025-07-07
#### PASS 5 seconds
### 2025-07-08
#### PASS 5 seconds