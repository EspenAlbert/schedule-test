# stream/streamprocessor/TestAccStreamProcessor_basic Test Details
# Found 39 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 32) FAIL(x 7)
Success rate: 82.05%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-01 02:13](#error-2025-07-01t0213580000) | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 31.04s
[2025-07-01 03:45](#error-2025-07-01t0345340000) | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 32.00s
[2025-07-01 05:13](#error-2025-07-01t0513170000) | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 31.07s
[2025-07-01 06:44](#error-2025-07-01t0644590000) | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 32.00s
[2025-07-02 00:46](#error-2025-07-02t0046310000) | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 31.04s
[2025-07-13 00:52](#error-2025-07-13t0052250000) | STREAM_PROCESSOR_TIMEOUT /api/atlas/v2/groups/6872fe96006d8d55bbaa2991/streams/test-acc-tf-5011107646572177812/processor/new-processor | qa |  | 75.09s
[2025-07-20 00:53](#error-2025-07-20t0053030000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/687c393e823af9166ef91845/streams/test-acc-tf-s-9049831376135069608/connections/sample_stream_solar | qa |  | 0.04s

## Timeline
- 2025-06-30: MISSING
- 2025-07-01
  - PASS 13 seconds
  - FAIL 31 seconds

### Error 2025-07-01T02:13:58+00:00
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-07-01T02:13:58.594000+00:00-TestAccStreamProcessor_basic',confidence=1.0,ts_when='29 days ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-07-01T02:13:58.5949916Z === RUN   TestAccStreamProcessor_basic
2025-07-01T02:13:58.6026715Z === CONT  TestAccStreamProcessor_basic
2025-07-01T02:13:58.6109890Z === NAME  TestAccStreamProcessor_basic
2025-07-01T02:13:58.6110339Z     resource_test.go:40: Step 1/3 error: Error running apply: exit status 1
2025-07-01T02:13:58.6110691Z         
2025-07-01T02:13:58.6110955Z         Error: error creating resource
2025-07-01T02:13:58.6111214Z         
2025-07-01T02:13:58.6111565Z           with mongodbatlas_stream_processor.processor,
2025-07-01T02:13:58.6112235Z           on terraform_plugin_test.tf line 32, in resource "mongodbatlas_stream_processor" "processor":
2025-07-01T02:13:58.6112868Z           32: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-01T02:13:58.6113184Z         
2025-07-01T02:13:58.6114052Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68634094bc45281a05845205/streams/test-acc-tf-3513068407892286765/processor
2025-07-01T02:13:58.6114853Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-01T02:13:58.6115500Z         Detail: Streams Processor with this name (new-processor) had a problem occur:
2025-07-01T02:13:58.6116138Z         failed to acquire resources for stream processor validation: internal error
2025-07-01T02:13:58.6116745Z         while provisioning resource from global resource manager. Reason: Bad
2025-07-01T02:13:58.6117342Z         Request. Params: [new-processor failed to acquire resources for stream
2025-07-01T02:13:58.6117971Z         processor validation: internal error while provisioning resource from global
2025-07-01T02:13:58.6118453Z         resource manager], BadRequestDetail: 
2025-07-01T02:13:58.6129892Z    test_terraform_path=/home/runner/work/_temp/1784ca3f-a607-41a4-90ca-e6acb377244d/terraform test_step_number=1 test_working_directory=/tmp/plugintest2333321827 test_name=TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-07-01T02:13:58.6167062Z === NAME  TestAccStreamProcessor_basic
2025-07-01T02:13:58.6167611Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-01T02:13:58.6168031Z         
2025-07-01T02:13:58.6168302Z         Error: error deleting resource
2025-07-01T02:13:58.6168561Z         
2025-07-01T02:13:58.6169504Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68634094bc45281a05845205/streams/test-acc-tf-3513068407892286765/connections/sample_stream_solar
2025-07-01T02:13:58.6170310Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-01T02:13:58.6170951Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-01T02:13:58.6171570Z         name test-acc-tf-3513068407892286765 has active processors, and cannot be
2025-07-01T02:13:58.6172293Z         changed. Reason: Forbidden. Params: [test-acc-tf-3513068407892286765],
2025-07-01T02:13:58.6172696Z         BadRequestDetail: 
2025-07-01T02:13:58.6172979Z --- FAIL: TestAccStreamProcessor_basic (31.44s)
```

  - FAIL 32 seconds

### Error 2025-07-01T03:45:34+00:00
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-07-01T03:45:34.546000+00:00-TestAccStreamProcessor_basic',confidence=1.0,ts_when='29 days ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-07-01T03:45:34.5469176Z === RUN   TestAccStreamProcessor_basic
2025-07-01T03:45:34.5528026Z === CONT  TestAccStreamProcessor_basic
2025-07-01T03:45:34.5552350Z === NAME  TestAccStreamProcessor_basic
2025-07-01T03:45:34.5552796Z     resource_test.go:40: Step 1/3 error: Error running apply: exit status 1
2025-07-01T03:45:34.5553150Z         
2025-07-01T03:45:34.5553415Z         Error: error creating resource
2025-07-01T03:45:34.5553673Z         
2025-07-01T03:45:34.5554024Z           with mongodbatlas_stream_processor.processor,
2025-07-01T03:45:34.5554927Z           on terraform_plugin_test.tf line 32, in resource "mongodbatlas_stream_processor" "processor":
2025-07-01T03:45:34.5555552Z           32: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-01T03:45:34.5556010Z         
2025-07-01T03:45:34.5556738Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6863563b8feb5850354f30bf/streams/test-acc-tf-3255171439023514210/processor
2025-07-01T03:45:34.5557537Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-01T03:45:34.5558165Z         Detail: Streams Processor with this name (new-processor) had a problem occur:
2025-07-01T03:45:34.5558838Z         failed to acquire resources for stream processor validation: internal error
2025-07-01T03:45:34.5559597Z         while provisioning resource from global resource manager. Reason: Bad
2025-07-01T03:45:34.5560191Z         Request. Params: [new-processor failed to acquire resources for stream
2025-07-01T03:45:34.5560832Z         processor validation: internal error while provisioning resource from global
2025-07-01T03:45:34.5561317Z         resource manager], BadRequestDetail: 
2025-07-01T03:45:34.5577413Z    test_working_directory=/tmp/plugintest1866371540 test_name=TestAccStreamProcessor_JSONWhiteSpaceFormat test_terraform_path=/home/runner/work/_temp/15fe8c85-c406-4728-92c0-004d3ec3fb7c/terraform test_step_number=1
2025-07-01T03:45:34.5599520Z === NAME  TestAccStreamProcessor_basic
2025-07-01T03:45:34.5600061Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-01T03:45:34.5600480Z         
2025-07-01T03:45:34.5600747Z         Error: error deleting resource
2025-07-01T03:45:34.5601007Z         
2025-07-01T03:45:34.5601956Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6863563b8feb5850354f30bf/streams/test-acc-tf-3255171439023514210/connections/sample_stream_solar
2025-07-01T03:45:34.5602701Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-01T03:45:34.5603226Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-01T03:45:34.5603960Z         name test-acc-tf-3255171439023514210 has active processors, and cannot be
2025-07-01T03:45:34.5604686Z         changed. Reason: Forbidden. Params: [test-acc-tf-3255171439023514210],
2025-07-01T03:45:34.5605099Z         BadRequestDetail: 
2025-07-01T03:45:34.5605377Z --- FAIL: TestAccStreamProcessor_basic (32.03s)
```

  - FAIL 31 seconds

### Error 2025-07-01T05:13:17+00:00
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-07-01T05:13:17.853000+00:00-TestAccStreamProcessor_basic',confidence=1.0,ts_when='29 days ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-07-01T05:13:17.8530026Z === RUN   TestAccStreamProcessor_basic
2025-07-01T05:13:17.8586774Z === CONT  TestAccStreamProcessor_basic
2025-07-01T05:13:17.8662877Z === NAME  TestAccStreamProcessor_basic
2025-07-01T05:13:17.8663331Z     resource_test.go:40: Step 1/3 error: Error running apply: exit status 1
2025-07-01T05:13:17.8663887Z         
2025-07-01T05:13:17.8664279Z         Error: error creating resource
2025-07-01T05:13:17.8664536Z         
2025-07-01T05:13:17.8664890Z           with mongodbatlas_stream_processor.processor,
2025-07-01T05:13:17.8665569Z           on terraform_plugin_test.tf line 32, in resource "mongodbatlas_stream_processor" "processor":
2025-07-01T05:13:17.8666198Z           32: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-01T05:13:17.8666524Z         
2025-07-01T05:13:17.8667261Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68636b0990ed24487dfc008d/streams/test-acc-tf-6998998825166437638/processor
2025-07-01T05:13:17.8668063Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-01T05:13:17.8668695Z         Detail: Streams Processor with this name (new-processor) had a problem occur:
2025-07-01T05:13:17.8669347Z         failed to acquire resources for stream processor validation: internal error
2025-07-01T05:13:17.8669961Z         while provisioning resource from global resource manager. Reason: Bad
2025-07-01T05:13:17.8670561Z         Request. Params: [new-processor failed to acquire resources for stream
2025-07-01T05:13:17.8671199Z         processor validation: internal error while provisioning resource from global
2025-07-01T05:13:17.8671680Z         resource manager], BadRequestDetail: 
2025-07-01T05:13:17.8683237Z    test_name=TestAccStreamProcessor_JSONWhiteSpaceFormat test_terraform_path=/home/runner/work/_temp/b88fc4c7-28f6-40d2-afc1-b0bef063111f/terraform test_working_directory=/tmp/plugintest931675927 test_step_number=1
2025-07-01T05:13:17.8722502Z === NAME  TestAccStreamProcessor_basic
2025-07-01T05:13:17.8723121Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-01T05:13:17.8723693Z         
2025-07-01T05:13:17.8724081Z         Error: error deleting resource
2025-07-01T05:13:17.8724347Z         
2025-07-01T05:13:17.8725317Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68636b0990ed24487dfc008d/streams/test-acc-tf-6998998825166437638/connections/sample_stream_solar
2025-07-01T05:13:17.8726206Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-01T05:13:17.8726844Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-01T05:13:17.8727590Z         name test-acc-tf-6998998825166437638 has active processors, and cannot be
2025-07-01T05:13:17.8728323Z         changed. Reason: Forbidden. Params: [test-acc-tf-6998998825166437638],
2025-07-01T05:13:17.8728732Z         BadRequestDetail: 
2025-07-01T05:13:17.8729123Z --- FAIL: TestAccStreamProcessor_basic (31.65s)
```

  - FAIL 32 seconds

### Error 2025-07-01T06:44:59+00:00
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-07-01T06:44:59.751000+00:00-TestAccStreamProcessor_basic',confidence=1.0,ts_when='29 days ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-07-01T06:44:59.0751788Z === RUN   TestAccStreamProcessor_basic
2025-07-01T06:44:59.0808236Z === CONT  TestAccStreamProcessor_basic
2025-07-01T06:44:59.0833873Z === NAME  TestAccStreamProcessor_basic
2025-07-01T06:44:59.0834324Z     resource_test.go:40: Step 1/3 error: Error running apply: exit status 1
2025-07-01T06:44:59.0834679Z         
2025-07-01T06:44:59.0834949Z         Error: error creating resource
2025-07-01T06:44:59.0835218Z         
2025-07-01T06:44:59.0835566Z           with mongodbatlas_stream_processor.processor,
2025-07-01T06:44:59.0836244Z           on terraform_plugin_test.tf line 32, in resource "mongodbatlas_stream_processor" "processor":
2025-07-01T06:44:59.0836867Z           32: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-01T06:44:59.0837405Z         
2025-07-01T06:44:59.0838132Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6863805390ed24487dfca318/streams/test-acc-tf-4199118284242227977/processor
2025-07-01T06:44:59.0838936Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-01T06:44:59.0839570Z         Detail: Streams Processor with this name (new-processor) had a problem occur:
2025-07-01T06:44:59.0840207Z         failed to acquire resources for stream processor validation: internal error
2025-07-01T06:44:59.0840819Z         while provisioning resource from global resource manager. Reason: Bad
2025-07-01T06:44:59.0841413Z         Request. Params: [new-processor failed to acquire resources for stream
2025-07-01T06:44:59.0842153Z         processor validation: internal error while provisioning resource from global
2025-07-01T06:44:59.0842636Z         resource manager], BadRequestDetail: 
2025-07-01T06:44:59.0857748Z    test_name=TestAccStreamProcessor_clusterType test_terraform_path=/home/runner/work/_temp/53b46d5b-2c10-40a7-a27e-e685bc116af8/terraform test_working_directory=/tmp/plugintest1801280892 test_step_number=1
2025-07-01T06:44:59.0929822Z === NAME  TestAccStreamProcessor_basic
2025-07-01T06:44:59.0930366Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-01T06:44:59.0930923Z         
2025-07-01T06:44:59.0931184Z         Error: error deleting resource
2025-07-01T06:44:59.0931507Z         
2025-07-01T06:44:59.0932608Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6863805390ed24487dfca318/streams/test-acc-tf-4199118284242227977/connections/sample_stream_solar
2025-07-01T06:44:59.0933363Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-01T06:44:59.0933885Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-01T06:44:59.0934494Z         name test-acc-tf-4199118284242227977 has active processors, and cannot be
2025-07-01T06:44:59.0935090Z         changed. Reason: Forbidden. Params: [test-acc-tf-4199118284242227977],
2025-07-01T06:44:59.0935494Z         BadRequestDetail: 
2025-07-01T06:44:59.0935831Z --- FAIL: TestAccStreamProcessor_basic (32.04s)
```

  - PASS 13 seconds
  - PASS 8 seconds
  - PASS 11 seconds
- 2025-07-02

### Error 2025-07-02T00:46:31+00:00
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-07-02T00:46:31.920000+00:00-TestAccStreamProcessor_basic',confidence=1.0,ts_when='28 days ago')
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

- 2025-07-03 PASS 20 seconds
- 2025-07-04 PASS 8 seconds
- 2025-07-05 PASS 12 seconds
- 2025-07-06 PASS 11 seconds
- 2025-07-07 PASS 9 seconds
- 2025-07-08 PASS 9 seconds
- 2025-07-09 PASS 9 seconds
- 2025-07-10
  - PASS 33 seconds
  - PASS 36 seconds
- 2025-07-11 PASS 11 seconds
- 2025-07-12 PASS 34 seconds
- 2025-07-13

### Error 2025-07-13T00:52:25+00:00
```
2025-07-13T00:52:25.1927445Z === RUN   TestAccStreamProcessor_basic
2025-07-13T00:52:25.1994501Z === CONT  TestAccStreamProcessor_basic
2025-07-13T00:52:25.2201288Z === NAME  TestAccStreamProcessor_basic
2025-07-13T00:52:25.2201745Z     resource_test.go:40: Step 2/3 error: Error running apply: exit status 1
2025-07-13T00:52:25.2202097Z         
2025-07-13T00:52:25.2202399Z         Error: Error modifying stream processor
2025-07-13T00:52:25.2202684Z         
2025-07-13T00:52:25.2203043Z           with mongodbatlas_stream_processor.processor,
2025-07-13T00:52:25.2203739Z           on terraform_plugin_test.tf line 35, in resource "mongodbatlas_stream_processor" "processor":
2025-07-13T00:52:25.2204387Z           35: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-13T00:52:25.2204871Z         
2025-07-13T00:52:25.2205793Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6872fe96006d8d55bbaa2991/streams/test-acc-tf-5011107646572177812/processor/new-processor
2025-07-13T00:52:25.2207000Z         PATCH: HTTP 504 Gateway Timeout (Error code: "STREAM_PROCESSOR_TIMEOUT")
2025-07-13T00:52:25.2207896Z         Detail: Streams Processor with this name (test-acc-tf-5011107646572177812)
2025-07-13T00:52:25.2208596Z         timed out while processing. Reason: Gateway Timeout. Params:
2025-07-13T00:52:25.2209338Z         [test-acc-tf-5011107646572177812 new-processor], BadRequestDetail: 
2025-07-13T00:52:25.2209836Z --- FAIL: TestAccStreamProcessor_basic (75.87s)
```

- 2025-07-14 PASS 9 seconds
- 2025-07-15 PASS 7 seconds
- 2025-07-16 PASS 11 seconds
- 2025-07-17 PASS 7 seconds
- 2025-07-18 PASS 11 seconds
- 2025-07-19 PASS 9 seconds
- 2025-07-20

### Error 2025-07-20T00:53:03+00:00
```
2025-07-20T00:53:03.6978547Z === RUN   TestAccStreamProcessor_basic
2025-07-20T00:53:03.7324367Z === CONT  TestAccStreamProcessor_basic
2025-07-20T00:53:03.7344300Z === NAME  TestAccStreamProcessor_basic
2025-07-20T00:53:03.7344819Z     resource_test.go:43: Step 1/3 error: Error running pre-apply plan: exit status 1
2025-07-20T00:53:03.7345215Z         
2025-07-20T00:53:03.7345487Z         Error: error fetching resource
2025-07-20T00:53:03.7346085Z         
2025-07-20T00:53:03.7346455Z           with data.mongodbatlas_stream_connection.sample,
2025-07-20T00:53:03.7347116Z           on terraform_plugin_test.tf line 23, in data "mongodbatlas_stream_connection" "sample":
2025-07-20T00:53:03.7347730Z           23:             data "mongodbatlas_stream_connection" "sample" {
2025-07-20T00:53:03.7348045Z         
2025-07-20T00:53:03.7348913Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/687c393e823af9166ef91845/streams/test-acc-tf-s-9049831376135069608/connections/sample_stream_solar
2025-07-20T00:53:03.7349803Z         GET: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-07-20T00:53:03.7350391Z         Detail: Stream instance for project 687c393e823af9166ef91845 and name
2025-07-20T00:53:03.7350991Z         test-acc-tf-s-9049831376135069608 not found. Reason: Not Found. Params:
2025-07-20T00:53:03.7351567Z         [687c393e823af9166ef91845 test-acc-tf-s-9049831376135069608],
2025-07-20T00:53:03.7351958Z         BadRequestDetail: 
2025-07-20T00:53:03.7365998Z   
2025-07-20T00:53:03.7374442Z --- FAIL: TestAccStreamProcessor_basic (0.42s)
```

- 2025-07-21 PASS 11 seconds
- 2025-07-22 PASS 7 seconds
- 2025-07-23
  - PASS 7 seconds
  - PASS 7 seconds
- 2025-07-24 PASS 7 seconds
- 2025-07-25 PASS 11 seconds
- 2025-07-26 PASS 11 seconds
- 2025-07-27 PASS 7 seconds
- 2025-07-28 PASS 8 seconds
- 2025-07-29 PASS 7 seconds
- 2025-07-30 PASS 7 seconds