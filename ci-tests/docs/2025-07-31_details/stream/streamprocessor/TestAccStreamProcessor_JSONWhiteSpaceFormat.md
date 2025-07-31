# stream/streamprocessor/TestAccStreamProcessor_JSONWhiteSpaceFormat Test Details
# Found 33 TestRuns in dev, qa from 2025-07-01 to 2025-07-31 from master branch: 1 unique tests, PASS(x 29) FAIL(x 4)
Success rate: 87.88%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-02 00:46](#error-2025-07-02t0046310000) | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 31.04s
[2025-07-10 00:43](#error-2025-07-10t0043190000) | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 31.09s
[2025-07-13 00:52](#error-2025-07-13t0052250000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6872fe96006d8d55bbaa2991/streams/test-acc-tf-5065427692135850842/processor | qa | flaky_500 | 31.05s
[2025-07-20 00:53](#error-2025-07-20t0053030000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/687c393e823af9166ef91845/streams/test-acc-tf-s-9049831376135069608/connections/sample_stream_solar | qa |  | 0.04s

## Timeline
- 2025-07-01 PASS 6 seconds
- 2025-07-02

### Error 2025-07-02T00:46:31+00:00
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-07-02T00:46:31.920000+00:00-TestAccStreamProcessor_JSONWhiteSpaceFormat',confidence=1.0,ts_when='29 days ago')
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

- 2025-07-03 PASS 8 seconds
- 2025-07-04 PASS 5 seconds
- 2025-07-05 PASS 7 seconds
- 2025-07-06 PASS 6 seconds
- 2025-07-07 PASS 5 seconds
- 2025-07-08 PASS 5 seconds
- 2025-07-09 PASS 5 seconds
- 2025-07-10
  - FAIL 31 seconds

### Error 2025-07-10T00:43:19+00:00
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-07-10T00:43:19.374000+00:00-TestAccStreamProcessor_JSONWhiteSpaceFormat',confidence=1.0,ts_when='21 days ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-07-10T00:43:19.3743034Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-07-10T00:43:19.3937640Z === CONT  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-07-10T00:43:19.3963093Z === NAME  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-07-10T00:43:19.3963594Z     resource_test.go:81: Step 1/1 error: Error running apply: exit status 1
2025-07-10T00:43:19.3963949Z         
2025-07-10T00:43:19.3964223Z         Error: error creating resource
2025-07-10T00:43:19.3964492Z         
2025-07-10T00:43:19.3964854Z           with mongodbatlas_stream_processor.processor,
2025-07-10T00:43:19.3965541Z           on terraform_plugin_test.tf line 35, in resource "mongodbatlas_stream_processor" "processor":
2025-07-10T00:43:19.3966188Z           35: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-10T00:43:19.3966723Z         
2025-07-10T00:43:19.3967481Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/686f096a964afc762c202930/streams/test-acc-tf-3076705145213902341/processor
2025-07-10T00:43:19.3968302Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-10T00:43:19.3968954Z         Detail: Streams Processor with this name (new-processor-json-unchanged) had a
2025-07-10T00:43:19.3969625Z         problem occur: failed to acquire resources for stream processor validation:
2025-07-10T00:43:19.3970263Z         internal error while provisioning resource from global resource manager.
2025-07-10T00:43:19.3971036Z         Reason: Bad Request. Params: [new-processor-json-unchanged failed to acquire
2025-07-10T00:43:19.3971707Z         resources for stream processor validation: internal error while provisioning
2025-07-10T00:43:19.3972293Z         resource from global resource manager], BadRequestDetail: 
2025-07-10T00:43:19.3985116Z    test_name=TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-07-10T00:43:19.3985726Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-10T00:43:19.3986153Z         
2025-07-10T00:43:19.3986525Z         Error: error deleting resource
2025-07-10T00:43:19.3986799Z         
2025-07-10T00:43:19.3987664Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/686f096a964afc762c202930/streams/test-acc-tf-3076705145213902341/connections/sample_stream_solar
2025-07-10T00:43:19.3988426Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-10T00:43:19.3988971Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-10T00:43:19.3989605Z         name sample_stream_solar in stream instance test-acc-tf-3076705145213902341
2025-07-10T00:43:19.3990238Z         has active processors, and cannot be changed. Reason: Forbidden. Params:
2025-07-10T00:43:19.3990863Z         [sample_stream_solar test-acc-tf-3076705145213902341], BadRequestDetail: 
2025-07-10T00:43:19.3991334Z --- FAIL: TestAccStreamProcessor_JSONWhiteSpaceFormat (31.89s)
```

  - PASS 31 seconds
- 2025-07-11 PASS 6 seconds
- 2025-07-12 PASS 20 seconds
- 2025-07-13

### Error 2025-07-13T00:52:25+00:00
```
2025-07-13T00:52:25.1928104Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-07-13T00:52:25.1994163Z === CONT  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-07-13T00:52:25.2046919Z === NAME  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-07-13T00:52:25.2047438Z     resource_test.go:81: Step 1/1 error: Error running apply: exit status 1
2025-07-13T00:52:25.2047903Z         
2025-07-13T00:52:25.2048181Z         Error: error creating resource
2025-07-13T00:52:25.2048543Z         
2025-07-13T00:52:25.2048904Z           with mongodbatlas_stream_processor.processor,
2025-07-13T00:52:25.2049710Z           on terraform_plugin_test.tf line 35, in resource "mongodbatlas_stream_processor" "processor":
2025-07-13T00:52:25.2050449Z           35: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-13T00:52:25.2050825Z         
2025-07-13T00:52:25.2051894Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6872fe96006d8d55bbaa2991/streams/test-acc-tf-5065427692135850842/processor
2025-07-13T00:52:25.2052995Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-13T00:52:25.2053745Z         Detail: Streams Processor with this name (new-processor-json-unchanged) had a
2025-07-13T00:52:25.2054523Z         problem occur: failed to acquire resources for stream processor validation:
2025-07-13T00:52:25.2055262Z         internal error while provisioning resource from global resource manager.
2025-07-13T00:52:25.2056017Z         Reason: Bad Request. Params: [new-processor-json-unchanged failed to acquire
2025-07-13T00:52:25.2056780Z         resources for stream processor validation: internal error while provisioning
2025-07-13T00:52:25.2057457Z         resource from global resource manager], BadRequestDetail: 
2025-07-13T00:52:25.2071253Z    test_terraform_path=/home/runner/work/_temp/2b3946cc-f842-4080-aa31-05bfa9ec016b/terraform
2025-07-13T00:52:25.2072083Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-13T00:52:25.2072519Z         
2025-07-13T00:52:25.2072902Z         Error: error deleting resource
2025-07-13T00:52:25.2073169Z         
2025-07-13T00:52:25.2074143Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6872fe96006d8d55bbaa2991/streams/test-acc-tf-5065427692135850842/connections/sample_stream_solar
2025-07-13T00:52:25.2075008Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-13T00:52:25.2075659Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-13T00:52:25.2076387Z         name test-acc-tf-5065427692135850842 has active processors, and cannot be
2025-07-13T00:52:25.2077103Z         changed. Reason: Forbidden. Params: [test-acc-tf-5065427692135850842],
2025-07-13T00:52:25.2077601Z         BadRequestDetail: 
2025-07-13T00:52:25.2077953Z --- FAIL: TestAccStreamProcessor_JSONWhiteSpaceFormat (31.51s)
```

- 2025-07-14 PASS 5 seconds
- 2025-07-15 PASS 4 seconds
- 2025-07-16 PASS 5 seconds
- 2025-07-17 PASS 4 seconds
- 2025-07-18 PASS 5 seconds
- 2025-07-19 PASS 4 seconds
- 2025-07-20

### Error 2025-07-20T00:53:03+00:00
```
2025-07-20T00:53:03.6979196Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-07-20T00:53:03.7325924Z === CONT  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-07-20T00:53:03.7327359Z   diagnostic_detail=
2025-07-20T00:53:03.7329787Z    diagnostic_severity=ERROR diagnostic_summary="Invalid JSON String Value" tf_resource_type=mongodbatlas_stream_processor tf_proto_version=6.9 tf_req_id=a20ece4d-59b7-41a4-faf9-f250ff2a9e28 diagnostic_attribute="AttributeName(\"pipeline\")"
2025-07-20T00:53:03.7343498Z    test_name=TestAccStreamProcessor_basic test_terraform_path=/home/runner/work/_temp/b448e69b-90e1-46c0-857c-8546e15106bc/terraform test_working_directory=/tmp/plugintest3868390534 test_step_number=1
2025-07-20T00:53:03.7366246Z === NAME  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-07-20T00:53:03.7366766Z     resource_test.go:86: Step 1/1 error: Error running pre-apply plan: exit status 1
2025-07-20T00:53:03.7367153Z         
2025-07-20T00:53:03.7367420Z         Error: error fetching resource
2025-07-20T00:53:03.7367703Z         
2025-07-20T00:53:03.7368062Z           with data.mongodbatlas_stream_connection.sample,
2025-07-20T00:53:03.7368709Z           on terraform_plugin_test.tf line 23, in data "mongodbatlas_stream_connection" "sample":
2025-07-20T00:53:03.7369310Z           23:             data "mongodbatlas_stream_connection" "sample" {
2025-07-20T00:53:03.7369875Z         
2025-07-20T00:53:03.7370844Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/687c393e823af9166ef91845/streams/test-acc-tf-s-9049831376135069608/connections/sample_stream_solar
2025-07-20T00:53:03.7371829Z         GET: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-07-20T00:53:03.7372508Z         Detail: Stream instance for project 687c393e823af9166ef91845 and name
2025-07-20T00:53:03.7373200Z         test-acc-tf-s-9049831376135069608 not found. Reason: Not Found. Params:
2025-07-20T00:53:03.7373775Z         [687c393e823af9166ef91845 test-acc-tf-s-9049831376135069608],
2025-07-20T00:53:03.7374160Z         BadRequestDetail: 
2025-07-20T00:53:03.7374831Z --- FAIL: TestAccStreamProcessor_JSONWhiteSpaceFormat (0.43s)
```

- 2025-07-21 PASS 5 seconds
- 2025-07-22 PASS 4 seconds
- 2025-07-23
  - PASS 4 seconds
  - PASS 4 seconds
- 2025-07-24 PASS 4 seconds
- 2025-07-25 PASS 5 seconds
- 2025-07-26 PASS 4 seconds
- 2025-07-27 PASS 4 seconds
- 2025-07-28 PASS 4 seconds
- 2025-07-29 PASS 3 seconds
- 2025-07-30 PASS 4 seconds
- 2025-07-31 PASS 4 seconds