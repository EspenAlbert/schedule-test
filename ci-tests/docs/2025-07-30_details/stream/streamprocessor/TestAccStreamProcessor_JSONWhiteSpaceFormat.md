# stream/streamprocessor/TestAccStreamProcessor_JSONWhiteSpaceFormat Test Details
# Found 39 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 30) FAIL(x 9)
Success rate: 76.92%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-01 00:44](#error-2025-07-01t0044570000) | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 32.01s
[2025-07-01 02:13](#error-2025-07-01t0213580000) | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 31.03s
[2025-07-01 03:45](#error-2025-07-01t0345340000) | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 32.01s
[2025-07-01 05:13](#error-2025-07-01t0513170000) | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 31.05s
[2025-07-01 06:44](#error-2025-07-01t0644590000) | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 32.01s
[2025-07-02 00:46](#error-2025-07-02t0046310000) | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 31.04s
[2025-07-10 00:43](#error-2025-07-10t0043190000) | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 31.09s
[2025-07-13 00:52](#error-2025-07-13t0052250000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6872fe96006d8d55bbaa2991/streams/test-acc-tf-5065427692135850842/processor | qa | flaky_500 | 31.05s
[2025-07-20 00:53](#error-2025-07-20t0053030000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/687c393e823af9166ef91845/streams/test-acc-tf-s-9049831376135069608/connections/sample_stream_solar | qa |  | 0.04s

## Timeline
- 2025-06-30: MISSING
- 2025-07-01
  - FAIL 32 seconds

### Error 2025-07-01T00:44:57+00:00
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-07-01T00:44:57.286000+00:00-TestAccStreamProcessor_JSONWhiteSpaceFormat',confidence=1.0,ts_when='29 days ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-07-01T00:44:57.2863524Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-07-01T00:44:57.2919574Z === CONT  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-07-01T00:44:57.2970236Z === NAME  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-07-01T00:44:57.2970741Z     resource_test.go:81: Step 1/1 error: Error running apply: exit status 1
2025-07-01T00:44:57.2971095Z         
2025-07-01T00:44:57.2971362Z         Error: error creating resource
2025-07-01T00:44:57.2971783Z         
2025-07-01T00:44:57.2972131Z           with mongodbatlas_stream_processor.processor,
2025-07-01T00:44:57.2972803Z           on terraform_plugin_test.tf line 32, in resource "mongodbatlas_stream_processor" "processor":
2025-07-01T00:44:57.2973430Z           32: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-01T00:44:57.2973756Z         
2025-07-01T00:44:57.2974487Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68632c108f2a6336ca1cff2e/streams/test-acc-tf-115811482334192969/processor
2025-07-01T00:44:57.2975296Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-01T00:44:57.2976050Z         Detail: Streams Processor with this name (new-processor-json-unchanged) had a
2025-07-01T00:44:57.2976703Z         problem occur: failed to acquire resources for stream processor validation:
2025-07-01T00:44:57.2977322Z         internal error while provisioning resource from global resource manager.
2025-07-01T00:44:57.2977959Z         Reason: Bad Request. Params: [new-processor-json-unchanged failed to acquire
2025-07-01T00:44:57.2978596Z         resources for stream processor validation: internal error while provisioning
2025-07-01T00:44:57.2979161Z         resource from global resource manager], BadRequestDetail: 
2025-07-01T00:44:57.2991461Z   
2025-07-01T00:44:57.3009934Z === NAME  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-07-01T00:44:57.3010508Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-01T00:44:57.3010960Z         
2025-07-01T00:44:57.3011239Z         Error: error deleting resource
2025-07-01T00:44:57.3011500Z         
2025-07-01T00:44:57.3012464Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68632c108f2a6336ca1cff2e/streams/test-acc-tf-115811482334192969/connections/sample_stream_solar
2025-07-01T00:44:57.3013214Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-01T00:44:57.3013733Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-01T00:44:57.3014347Z         name test-acc-tf-115811482334192969 has active processors, and cannot be
2025-07-01T00:44:57.3014943Z         changed. Reason: Forbidden. Params: [test-acc-tf-115811482334192969],
2025-07-01T00:44:57.3015344Z         BadRequestDetail: 
2025-07-01T00:44:57.3015788Z --- FAIL: TestAccStreamProcessor_JSONWhiteSpaceFormat (32.09s)
```

  - FAIL 31 seconds

### Error 2025-07-01T02:13:58+00:00
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-07-01T02:13:58.595000+00:00-TestAccStreamProcessor_JSONWhiteSpaceFormat',confidence=1.0,ts_when='29 days ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-07-01T02:13:58.5950529Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-07-01T02:13:58.6026382Z === CONT  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-07-01T02:13:58.6054882Z === NAME  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-07-01T02:13:58.6055539Z     resource_test.go:81: Step 1/1 error: Error running apply: exit status 1
2025-07-01T02:13:58.6056016Z         
2025-07-01T02:13:58.6056299Z         Error: error creating resource
2025-07-01T02:13:58.6056571Z         
2025-07-01T02:13:58.6057052Z           with mongodbatlas_stream_processor.processor,
2025-07-01T02:13:58.6057855Z           on terraform_plugin_test.tf line 32, in resource "mongodbatlas_stream_processor" "processor":
2025-07-01T02:13:58.6058760Z           32: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-01T02:13:58.6059104Z         
2025-07-01T02:13:58.6060209Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68634094bc45281a05845205/streams/test-acc-tf-5390254821205293276/processor
2025-07-01T02:13:58.6061145Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-01T02:13:58.6061907Z         Detail: Streams Processor with this name (new-processor-json-unchanged) had a
2025-07-01T02:13:58.6062699Z         problem occur: failed to acquire resources for stream processor validation:
2025-07-01T02:13:58.6063448Z         internal error while provisioning resource from global resource manager.
2025-07-01T02:13:58.6064143Z         Reason: Bad Request. Params: [new-processor-json-unchanged failed to acquire
2025-07-01T02:13:58.6064857Z         resources for stream processor validation: internal error while provisioning
2025-07-01T02:13:58.6065549Z         resource from global resource manager], BadRequestDetail: 
2025-07-01T02:13:58.6084246Z   
2025-07-01T02:13:58.6130776Z === NAME  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-07-01T02:13:58.6131355Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-01T02:13:58.6131781Z         
2025-07-01T02:13:58.6132046Z         Error: error deleting resource
2025-07-01T02:13:58.6132312Z         
2025-07-01T02:13:58.6133308Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68634094bc45281a05845205/streams/test-acc-tf-5390254821205293276/connections/sample_stream_solar
2025-07-01T02:13:58.6134192Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-01T02:13:58.6134716Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-01T02:13:58.6135327Z         name test-acc-tf-5390254821205293276 has active processors, and cannot be
2025-07-01T02:13:58.6135928Z         changed. Reason: Forbidden. Params: [test-acc-tf-5390254821205293276],
2025-07-01T02:13:58.6136332Z         BadRequestDetail: 
2025-07-01T02:13:58.6136664Z --- FAIL: TestAccStreamProcessor_JSONWhiteSpaceFormat (31.33s)
```

  - FAIL 32 seconds

### Error 2025-07-01T03:45:34+00:00
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-07-01T03:45:34.546000+00:00-TestAccStreamProcessor_JSONWhiteSpaceFormat',confidence=1.0,ts_when='29 days ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-07-01T03:45:34.5469780Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-07-01T03:45:34.5527698Z === CONT  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-07-01T03:45:34.5578313Z === NAME  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-07-01T03:45:34.5578802Z     resource_test.go:81: Step 1/1 error: Error running apply: exit status 1
2025-07-01T03:45:34.5579157Z         
2025-07-01T03:45:34.5579421Z         Error: error creating resource
2025-07-01T03:45:34.5579856Z         
2025-07-01T03:45:34.5580208Z           with mongodbatlas_stream_processor.processor,
2025-07-01T03:45:34.5580874Z           on terraform_plugin_test.tf line 32, in resource "mongodbatlas_stream_processor" "processor":
2025-07-01T03:45:34.5581494Z           32: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-01T03:45:34.5581810Z         
2025-07-01T03:45:34.5582534Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6863563b8feb5850354f30bf/streams/test-acc-tf-6658766638938144833/processor
2025-07-01T03:45:34.5583333Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-01T03:45:34.5583965Z         Detail: Streams Processor with this name (new-processor-json-unchanged) had a
2025-07-01T03:45:34.5584834Z         problem occur: failed to acquire resources for stream processor validation:
2025-07-01T03:45:34.5585462Z         internal error while provisioning resource from global resource manager.
2025-07-01T03:45:34.5586092Z         Reason: Bad Request. Params: [new-processor-json-unchanged failed to acquire
2025-07-01T03:45:34.5586736Z         resources for stream processor validation: internal error while provisioning
2025-07-01T03:45:34.5587297Z         resource from global resource manager], BadRequestDetail: 
2025-07-01T03:45:34.5599009Z    test_terraform_path=/home/runner/work/_temp/15fe8c85-c406-4728-92c0-004d3ec3fb7c/terraform test_step_number=1
2025-07-01T03:45:34.5617801Z === NAME  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-07-01T03:45:34.5618377Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-01T03:45:34.5618805Z         
2025-07-01T03:45:34.5619074Z         Error: error deleting resource
2025-07-01T03:45:34.5619340Z         
2025-07-01T03:45:34.5620319Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6863563b8feb5850354f30bf/streams/test-acc-tf-6658766638938144833/connections/sample_stream_solar
2025-07-01T03:45:34.5621075Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-01T03:45:34.5621594Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-01T03:45:34.5622207Z         name test-acc-tf-6658766638938144833 has active processors, and cannot be
2025-07-01T03:45:34.5622805Z         changed. Reason: Forbidden. Params: [test-acc-tf-6658766638938144833],
2025-07-01T03:45:34.5623214Z         BadRequestDetail: 
2025-07-01T03:45:34.5623547Z --- FAIL: TestAccStreamProcessor_JSONWhiteSpaceFormat (32.06s)
```

  - FAIL 31 seconds

### Error 2025-07-01T05:13:17+00:00
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-07-01T05:13:17.853000+00:00-TestAccStreamProcessor_JSONWhiteSpaceFormat',confidence=1.0,ts_when='29 days ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-07-01T05:13:17.8530634Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-07-01T05:13:17.8586442Z === CONT  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-07-01T05:13:17.8612498Z === NAME  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-07-01T05:13:17.8612998Z     resource_test.go:81: Step 1/1 error: Error running apply: exit status 1
2025-07-01T05:13:17.8613473Z         
2025-07-01T05:13:17.8613861Z         Error: error creating resource
2025-07-01T05:13:17.8614131Z         
2025-07-01T05:13:17.8614492Z           with mongodbatlas_stream_processor.processor,
2025-07-01T05:13:17.8615174Z           on terraform_plugin_test.tf line 32, in resource "mongodbatlas_stream_processor" "processor":
2025-07-01T05:13:17.8615809Z           32: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-01T05:13:17.8616134Z         
2025-07-01T05:13:17.8616874Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68636b0990ed24487dfc008d/streams/test-acc-tf-6047867759578695484/processor
2025-07-01T05:13:17.8617817Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-01T05:13:17.8618455Z         Detail: Streams Processor with this name (new-processor-json-unchanged) had a
2025-07-01T05:13:17.8619117Z         problem occur: failed to acquire resources for stream processor validation:
2025-07-01T05:13:17.8619739Z         internal error while provisioning resource from global resource manager.
2025-07-01T05:13:17.8620371Z         Reason: Bad Request. Params: [new-processor-json-unchanged failed to acquire
2025-07-01T05:13:17.8621020Z         resources for stream processor validation: internal error while provisioning
2025-07-01T05:13:17.8621594Z         resource from global resource manager], BadRequestDetail: 
2025-07-01T05:13:17.8637858Z   
2025-07-01T05:13:17.8684263Z === NAME  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-07-01T05:13:17.8684850Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-01T05:13:17.8685277Z         
2025-07-01T05:13:17.8685548Z         Error: error deleting resource
2025-07-01T05:13:17.8685809Z         
2025-07-01T05:13:17.8686654Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68636b0990ed24487dfc008d/streams/test-acc-tf-6047867759578695484/connections/sample_stream_solar
2025-07-01T05:13:17.8687411Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-01T05:13:17.8687937Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-01T05:13:17.8688681Z         name test-acc-tf-6047867759578695484 has active processors, and cannot be
2025-07-01T05:13:17.8689279Z         changed. Reason: Forbidden. Params: [test-acc-tf-6047867759578695484],
2025-07-01T05:13:17.8689692Z         BadRequestDetail: 
2025-07-01T05:13:17.8690019Z --- FAIL: TestAccStreamProcessor_JSONWhiteSpaceFormat (31.53s)
```

  - FAIL 32 seconds

### Error 2025-07-01T06:44:59+00:00
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-07-01T06:44:59.752000+00:00-TestAccStreamProcessor_JSONWhiteSpaceFormat',confidence=1.0,ts_when='29 days ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-07-01T06:44:59.0752838Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-07-01T06:44:59.0807904Z === CONT  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-07-01T06:44:59.0884047Z === NAME  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-07-01T06:44:59.0884533Z     resource_test.go:81: Step 1/1 error: Error running apply: exit status 1
2025-07-01T06:44:59.0884888Z         
2025-07-01T06:44:59.0885151Z         Error: error creating resource
2025-07-01T06:44:59.0885417Z         
2025-07-01T06:44:59.0885759Z           with mongodbatlas_stream_processor.processor,
2025-07-01T06:44:59.0886426Z           on terraform_plugin_test.tf line 32, in resource "mongodbatlas_stream_processor" "processor":
2025-07-01T06:44:59.0887039Z           32: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-01T06:44:59.0887363Z         
2025-07-01T06:44:59.0888086Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6863805390ed24487dfca318/streams/test-acc-tf-3633310914140806969/processor
2025-07-01T06:44:59.0888902Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-01T06:44:59.0889532Z         Detail: Streams Processor with this name (new-processor-json-unchanged) had a
2025-07-01T06:44:59.0890182Z         problem occur: failed to acquire resources for stream processor validation:
2025-07-01T06:44:59.0890797Z         internal error while provisioning resource from global resource manager.
2025-07-01T06:44:59.0891421Z         Reason: Bad Request. Params: [new-processor-json-unchanged failed to acquire
2025-07-01T06:44:59.0892200Z         resources for stream processor validation: internal error while provisioning
2025-07-01T06:44:59.0892766Z         resource from global resource manager], BadRequestDetail: 
2025-07-01T06:44:59.0908815Z   
2025-07-01T06:44:59.0966205Z === NAME  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-07-01T06:44:59.0966785Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-01T06:44:59.0967210Z         
2025-07-01T06:44:59.0967477Z         Error: error deleting resource
2025-07-01T06:44:59.0967737Z         
2025-07-01T06:44:59.0968616Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6863805390ed24487dfca318/streams/test-acc-tf-3633310914140806969/connections/sample_stream_solar
2025-07-01T06:44:59.0969356Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-01T06:44:59.0969870Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-01T06:44:59.0970478Z         name test-acc-tf-3633310914140806969 has active processors, and cannot be
2025-07-01T06:44:59.0971193Z         changed. Reason: Forbidden. Params: [test-acc-tf-3633310914140806969],
2025-07-01T06:44:59.0971601Z         BadRequestDetail: 
2025-07-01T06:44:59.0972038Z --- FAIL: TestAccStreamProcessor_JSONWhiteSpaceFormat (32.13s)
```

  - PASS 7 seconds
  - PASS 5 seconds
  - PASS 6 seconds
- 2025-07-02

### Error 2025-07-02T00:46:31+00:00
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-07-02T00:46:31.920000+00:00-TestAccStreamProcessor_JSONWhiteSpaceFormat',confidence=1.0,ts_when='28 days ago')
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
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-07-10T00:43:19.374000+00:00-TestAccStreamProcessor_JSONWhiteSpaceFormat',confidence=1.0,ts_when='20 days ago')
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