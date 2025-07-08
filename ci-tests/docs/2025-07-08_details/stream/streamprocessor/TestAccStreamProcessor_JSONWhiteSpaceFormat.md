# stream/streamprocessor/TestAccStreamProcessor_JSONWhiteSpaceFormat Test Details
# Found 10 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 9) FAIL
Success rate: 90.00%

## Timeline
### 2025-07-01
#### PASS 7 seconds
```
2025-07-01T08:50:28.2733373Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-07-01T08:50:28.2836672Z === CONT  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-07-01T08:50:28.2854397Z --- PASS: TestAccStreamProcessor_JSONWhiteSpaceFormat (7.42s)
```
#### PASS 5 seconds
```
2025-07-01T12:50:20.6073507Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-07-01T12:50:20.6127103Z === CONT  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-07-01T12:50:20.6136015Z --- PASS: TestAccStreamProcessor_JSONWhiteSpaceFormat (5.25s)
```
#### PASS 6 seconds
```
2025-07-01T17:50:24.3484112Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-07-01T17:50:24.3583739Z === CONT  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-07-01T17:50:24.3598442Z --- PASS: TestAccStreamProcessor_JSONWhiteSpaceFormat (6.50s)
```
### 2025-07-02
#### FAIL 31 seconds
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-07-02T00:46:31.920000+00:00-TestAccStreamProcessor_JSONWhiteSpaceFormat',confidence=1.0,ts_when='5 days ago')
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
```
2025-07-03T00:46:39.9541810Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-07-03T00:46:39.9794689Z === CONT  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-07-03T00:46:39.9796950Z   diagnostic_detail=
2025-07-03T00:46:39.9798954Z    diagnostic_severity=ERROR diagnostic_summary="Invalid JSON String Value" diagnostic_attribute="AttributeName(\"pipeline\")"
2025-07-03T00:46:39.9802671Z --- PASS: TestAccStreamProcessor_JSONWhiteSpaceFormat (8.91s)
```
### 2025-07-04
#### PASS 5 seconds
```
2025-07-04T00:51:07.7054252Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-07-04T00:51:07.7213358Z === CONT  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-07-04T00:51:07.7223141Z --- PASS: TestAccStreamProcessor_JSONWhiteSpaceFormat (5.45s)
```
### 2025-07-05
#### PASS 7 seconds
```
2025-07-05T00:44:07.5870016Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-07-05T00:44:07.6142554Z === CONT  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-07-05T00:44:07.6150934Z --- PASS: TestAccStreamProcessor_JSONWhiteSpaceFormat (7.30s)
```
### 2025-07-06
#### PASS 6 seconds
```
2025-07-06T00:48:43.0078677Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-07-06T00:48:43.0302878Z === CONT  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-07-06T00:48:43.0311492Z --- PASS: TestAccStreamProcessor_JSONWhiteSpaceFormat (6.32s)
```
### 2025-07-07
#### PASS 5 seconds
```
2025-07-07T00:48:05.7811857Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-07-07T00:48:05.8095323Z === CONT  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-07-07T00:48:05.8103763Z --- PASS: TestAccStreamProcessor_JSONWhiteSpaceFormat (5.67s)
```
### 2025-07-08
#### PASS 5 seconds
```
2025-07-08T00:45:56.1166120Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-07-08T00:45:56.1511050Z === CONT  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-07-08T00:45:56.1526262Z --- PASS: TestAccStreamProcessor_JSONWhiteSpaceFormat (5.87s)
```