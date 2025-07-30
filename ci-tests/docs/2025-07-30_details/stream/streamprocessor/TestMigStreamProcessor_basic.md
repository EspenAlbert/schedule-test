# stream/streamprocessor/TestMigStreamProcessor_basic Test Details
# Found 39 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 31) FAIL(x 8)
Success rate: 79.49%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-01 00:44](#error-2025-07-01t0044570000) | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 37.04s
[2025-07-01 02:13](#error-2025-07-01t0213580000) | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 35.00s
[2025-07-01 05:13](#error-2025-07-01t0513170000) | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 34.01s
[2025-07-01 06:44](#error-2025-07-01t0644590000) | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 37.03s
[2025-07-02 00:46](#error-2025-07-02t0046310000) | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 34.07s
[2025-07-06 00:48](#error-2025-07-06t0048430000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6869c40b690ae45e168bd561/streams/test-acc-tf-2853761433766751037/processor | qa |  | 36.02s
[2025-07-13 00:52](#error-2025-07-13t0052250000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6872fe96006d8d55bbaa2991/streams/test-acc-tf-1578256641712202694/processor | qa |  | 34.06s
[2025-07-20 00:53](#error-2025-07-20t0053030000) | UNEXPECTED_ERROR /api/atlas/v2/groups/687c393e823af9166ef91845/streams | qa | flaky_500 | 33.08s

## Timeline
- 2025-06-30: MISSING
- 2025-07-01
  - FAIL 37 seconds

### Error 2025-07-01T00:44:57+00:00
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-07-01T00:44:57.286000+00:00-TestMigStreamProcessor_basic',confidence=1.0,ts_when='29 days ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-07-01T00:44:57.2861594Z === RUN   TestMigStreamProcessor_basic
2025-07-01T00:44:57.2862135Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-8567333810696895320
2025-07-01T00:44:57.2918796Z === CONT  TestMigStreamProcessor_basic
2025-07-01T00:44:57.3083310Z === NAME  TestMigStreamProcessor_basic
2025-07-01T00:44:57.3083950Z     resource_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-07-01T00:44:57.3084341Z         
2025-07-01T00:44:57.3084608Z         Error: error creating resource
2025-07-01T00:44:57.3084865Z         
2025-07-01T00:44:57.3085216Z           with mongodbatlas_stream_processor.processor,
2025-07-01T00:44:57.3086252Z           on terraform_plugin_test.tf line 34, in resource "mongodbatlas_stream_processor" "processor":
2025-07-01T00:44:57.3086889Z           34: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-01T00:44:57.3087217Z         
2025-07-01T00:44:57.3087941Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68632c108f2a6336ca1cff2e/streams/test-acc-tf-8181445992454115096/processor
2025-07-01T00:44:57.3088748Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-01T00:44:57.3089380Z         Detail: Streams Processor with this name (new-processor) had a problem occur:
2025-07-01T00:44:57.3090033Z         failed to acquire resources for stream processor validation: internal error
2025-07-01T00:44:57.3090650Z         while provisioning resource from global resource manager. Reason: Bad
2025-07-01T00:44:57.3091380Z         Request. Params: [new-processor failed to acquire resources for stream
2025-07-01T00:44:57.3092025Z         processor validation: internal error while provisioning resource from global
2025-07-01T00:44:57.3092511Z         resource manager], BadRequestDetail: 
2025-07-01T00:44:57.3098856Z    test_terraform_path=/home/runner/work/_temp/2752f1f8-b6df-45dc-9ccb-b3d51c55216e/terraform test_step_number=1 test_working_directory=/tmp/plugintest3711405940
2025-07-01T00:44:57.3099781Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-01T00:44:57.3100203Z         
2025-07-01T00:44:57.3100475Z         Error: error deleting resource
2025-07-01T00:44:57.3100735Z         
2025-07-01T00:44:57.3101588Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68632c108f2a6336ca1cff2e/streams/test-acc-tf-8181445992454115096/connections/sample_stream_solar
2025-07-01T00:44:57.3102337Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-01T00:44:57.3102873Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-01T00:44:57.3103487Z         name test-acc-tf-8181445992454115096 has active processors, and cannot be
2025-07-01T00:44:57.3104086Z         changed. Reason: Forbidden. Params: [test-acc-tf-8181445992454115096],
2025-07-01T00:44:57.3104496Z         BadRequestDetail: 
2025-07-01T00:44:57.3104777Z --- FAIL: TestMigStreamProcessor_basic (37.42s)
```

  - FAIL 35 seconds

### Error 2025-07-01T02:13:58+00:00
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-07-01T02:13:58.594000+00:00-TestMigStreamProcessor_basic',confidence=1.0,ts_when='29 days ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-07-01T02:13:58.5948410Z === RUN   TestMigStreamProcessor_basic
2025-07-01T02:13:58.5948970Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-3595904091326762576
2025-07-01T02:13:58.6025568Z === CONT  TestMigStreamProcessor_basic
2025-07-01T02:13:58.6238408Z === NAME  TestMigStreamProcessor_basic
2025-07-01T02:13:58.6238898Z     resource_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-07-01T02:13:58.6239276Z         
2025-07-01T02:13:58.6239634Z         Error: error creating resource
2025-07-01T02:13:58.6239893Z         
2025-07-01T02:13:58.6240244Z           with mongodbatlas_stream_processor.processor,
2025-07-01T02:13:58.6241032Z           on terraform_plugin_test.tf line 34, in resource "mongodbatlas_stream_processor" "processor":
2025-07-01T02:13:58.6241665Z           34: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-01T02:13:58.6241984Z         
2025-07-01T02:13:58.6242707Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68634094bc45281a05845205/streams/test-acc-tf-9029449505100471126/processor
2025-07-01T02:13:58.6243498Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-01T02:13:58.6244133Z         Detail: Streams Processor with this name (new-processor) had a problem occur:
2025-07-01T02:13:58.6244771Z         failed to acquire resources for stream processor validation: internal error
2025-07-01T02:13:58.6245381Z         while provisioning resource from global resource manager. Reason: Bad
2025-07-01T02:13:58.6246014Z         Request. Params: [new-processor failed to acquire resources for stream
2025-07-01T02:13:58.6246643Z         processor validation: internal error while provisioning resource from global
2025-07-01T02:13:58.6247128Z         resource manager], BadRequestDetail: 
2025-07-01T02:13:58.6253856Z   
2025-07-01T02:13:58.6254306Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-01T02:13:58.6254730Z         
2025-07-01T02:13:58.6254998Z         Error: error deleting resource
2025-07-01T02:13:58.6255257Z         
2025-07-01T02:13:58.6256102Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68634094bc45281a05845205/streams/test-acc-tf-9029449505100471126/connections/sample_stream_solar
2025-07-01T02:13:58.6256851Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-01T02:13:58.6257379Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-01T02:13:58.6257997Z         name test-acc-tf-9029449505100471126 has active processors, and cannot be
2025-07-01T02:13:58.6258624Z         changed. Reason: Forbidden. Params: [test-acc-tf-9029449505100471126],
2025-07-01T02:13:58.6259029Z         BadRequestDetail: 
2025-07-01T02:13:58.6259312Z --- FAIL: TestMigStreamProcessor_basic (35.01s)
```

  - PASS 45 seconds
  - FAIL 34 seconds

### Error 2025-07-01T05:13:17+00:00
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-07-01T05:13:17.852000+00:00-TestMigStreamProcessor_basic',confidence=1.0,ts_when='29 days ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-07-01T05:13:17.8528734Z === RUN   TestMigStreamProcessor_basic
2025-07-01T05:13:17.8529279Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-4096053625297528380
2025-07-01T05:13:17.8585789Z === CONT  TestMigStreamProcessor_basic
2025-07-01T05:13:17.8800707Z === NAME  TestMigStreamProcessor_basic
2025-07-01T05:13:17.8801203Z     resource_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-07-01T05:13:17.8801585Z         
2025-07-01T05:13:17.8801847Z         Error: error creating resource
2025-07-01T05:13:17.8802106Z         
2025-07-01T05:13:17.8802462Z           with mongodbatlas_stream_processor.processor,
2025-07-01T05:13:17.8803145Z           on terraform_plugin_test.tf line 34, in resource "mongodbatlas_stream_processor" "processor":
2025-07-01T05:13:17.8803993Z           34: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-01T05:13:17.8804320Z         
2025-07-01T05:13:17.8805171Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68636b0990ed24487dfc008d/streams/test-acc-tf-918777966412026813/processor
2025-07-01T05:13:17.8805977Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-01T05:13:17.8806608Z         Detail: Streams Processor with this name (new-processor) had a problem occur:
2025-07-01T05:13:17.8807264Z         failed to acquire resources for stream processor validation: internal error
2025-07-01T05:13:17.8807883Z         while provisioning resource from global resource manager. Reason: Bad
2025-07-01T05:13:17.8808625Z         Request. Params: [new-processor failed to acquire resources for stream
2025-07-01T05:13:17.8809266Z         processor validation: internal error while provisioning resource from global
2025-07-01T05:13:17.8809748Z         resource manager], BadRequestDetail: 
2025-07-01T05:13:17.8816238Z    test_working_directory=/tmp/plugintest644287121 test_name=TestMigStreamProcessor_basic
2025-07-01T05:13:17.8816930Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-01T05:13:17.8817355Z         
2025-07-01T05:13:17.8817627Z         Error: error deleting resource
2025-07-01T05:13:17.8817888Z         
2025-07-01T05:13:17.8818734Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68636b0990ed24487dfc008d/streams/test-acc-tf-918777966412026813/connections/sample_stream_solar
2025-07-01T05:13:17.8819480Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-01T05:13:17.8820008Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-01T05:13:17.8820618Z         name test-acc-tf-918777966412026813 has active processors, and cannot be
2025-07-01T05:13:17.8821206Z         changed. Reason: Forbidden. Params: [test-acc-tf-918777966412026813],
2025-07-01T05:13:17.8821611Z         BadRequestDetail: 
2025-07-01T05:13:17.8821895Z --- FAIL: TestMigStreamProcessor_basic (34.12s)
```

  - FAIL 37 seconds

### Error 2025-07-01T06:44:59+00:00
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-07-01T06:44:59.750000+00:00-TestMigStreamProcessor_basic',confidence=1.0,ts_when='29 days ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-07-01T06:44:59.0750506Z === RUN   TestMigStreamProcessor_basic
2025-07-01T06:44:59.0751049Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-7757124428237359818
2025-07-01T06:44:59.0807262Z === CONT  TestMigStreamProcessor_basic
2025-07-01T06:44:59.1013754Z === NAME  TestMigStreamProcessor_basic
2025-07-01T06:44:59.1014243Z     resource_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-07-01T06:44:59.1014620Z         
2025-07-01T06:44:59.1014880Z         Error: error creating resource
2025-07-01T06:44:59.1015135Z         
2025-07-01T06:44:59.1015484Z           with mongodbatlas_stream_processor.processor,
2025-07-01T06:44:59.1016150Z           on terraform_plugin_test.tf line 34, in resource "mongodbatlas_stream_processor" "processor":
2025-07-01T06:44:59.1016769Z           34: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-01T06:44:59.1017087Z         
2025-07-01T06:44:59.1017971Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6863805390ed24487dfca318/streams/test-acc-tf-7041944892660654198/processor
2025-07-01T06:44:59.1018777Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-01T06:44:59.1019395Z         Detail: Streams Processor with this name (new-processor) had a problem occur:
2025-07-01T06:44:59.1020038Z         failed to acquire resources for stream processor validation: internal error
2025-07-01T06:44:59.1020647Z         while provisioning resource from global resource manager. Reason: Bad
2025-07-01T06:44:59.1021233Z         Request. Params: [new-processor failed to acquire resources for stream
2025-07-01T06:44:59.1022151Z         processor validation: internal error while provisioning resource from global
2025-07-01T06:44:59.1022705Z         resource manager], BadRequestDetail: 
2025-07-01T06:44:59.1028881Z    test_name=TestMigStreamProcessor_basic test_working_directory=/tmp/plugintest3293962262 test_step_number=1 test_terraform_path=/home/runner/work/_temp/53b46d5b-2c10-40a7-a27e-e685bc116af8/terraform
2025-07-01T06:44:59.1029914Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-01T06:44:59.1030345Z         
2025-07-01T06:44:59.1030612Z         Error: error deleting resource
2025-07-01T06:44:59.1030866Z         
2025-07-01T06:44:59.1031701Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6863805390ed24487dfca318/streams/test-acc-tf-7041944892660654198/connections/sample_stream_solar
2025-07-01T06:44:59.1032769Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-01T06:44:59.1033426Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-01T06:44:59.1034147Z         name test-acc-tf-7041944892660654198 has active processors, and cannot be
2025-07-01T06:44:59.1034749Z         changed. Reason: Forbidden. Params: [test-acc-tf-7041944892660654198],
2025-07-01T06:44:59.1035302Z         BadRequestDetail: 
2025-07-01T06:44:59.1035699Z --- FAIL: TestMigStreamProcessor_basic (37.34s)
```

  - PASS 16 seconds
  - PASS 10 seconds
  - PASS 13 seconds
- 2025-07-02

### Error 2025-07-02T00:46:31+00:00
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-07-02T00:46:31.920000+00:00-TestMigStreamProcessor_basic',confidence=1.0,ts_when='28 days ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-07-02T00:46:31.9206236Z === RUN   TestMigStreamProcessor_basic
2025-07-02T00:46:31.9207255Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-3752186971444699683
2025-07-02T00:46:31.9330864Z === CONT  TestMigStreamProcessor_basic
2025-07-02T00:46:31.9539974Z === NAME  TestMigStreamProcessor_basic
2025-07-02T00:46:31.9540470Z     resource_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-07-02T00:46:31.9540857Z         
2025-07-02T00:46:31.9541121Z         Error: error creating resource
2025-07-02T00:46:31.9541381Z         
2025-07-02T00:46:31.9541859Z           with mongodbatlas_stream_processor.processor,
2025-07-02T00:46:31.9542552Z           on terraform_plugin_test.tf line 37, in resource "mongodbatlas_stream_processor" "processor":
2025-07-02T00:46:31.9543183Z           37: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-02T00:46:31.9543505Z         
2025-07-02T00:46:31.9544241Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68647d45ef5b3c2f1ae5eb8b/streams/test-acc-tf-1937701611748670836/processor
2025-07-02T00:46:31.9545057Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-02T00:46:31.9545834Z         Detail: Streams Processor with this name (new-processor) had a problem occur:
2025-07-02T00:46:31.9546491Z         failed to acquire resources for stream processor validation: internal error
2025-07-02T00:46:31.9547115Z         while provisioning resource from global resource manager. Reason: Bad
2025-07-02T00:46:31.9547723Z         Request. Params: [new-processor failed to acquire resources for stream
2025-07-02T00:46:31.9548365Z         processor validation: internal error while provisioning resource from global
2025-07-02T00:46:31.9548855Z         resource manager], BadRequestDetail: 
2025-07-02T00:46:31.9555115Z    test_name=TestMigStreamProcessor_basic test_terraform_path=/home/runner/work/_temp/562e13ef-6059-4fe1-8ce4-2da40aa0a837/terraform test_working_directory=/tmp/plugintest2168144767
2025-07-02T00:46:31.9556132Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-02T00:46:31.9556560Z         
2025-07-02T00:46:31.9556824Z         Error: error deleting resource
2025-07-02T00:46:31.9557085Z         
2025-07-02T00:46:31.9557951Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68647d45ef5b3c2f1ae5eb8b/streams/test-acc-tf-1937701611748670836/connections/sample_stream_solar
2025-07-02T00:46:31.9558901Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-02T00:46:31.9559529Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-02T00:46:31.9560436Z         name test-acc-tf-1937701611748670836 has active processors, and cannot be
2025-07-02T00:46:31.9561179Z         changed. Reason: Forbidden. Params: [test-acc-tf-1937701611748670836],
2025-07-02T00:46:31.9561891Z         BadRequestDetail: 
2025-07-02T00:46:31.9562278Z --- FAIL: TestMigStreamProcessor_basic (34.66s)
```

- 2025-07-03 PASS 12 seconds
- 2025-07-04 PASS 24 seconds
- 2025-07-05 PASS 14 seconds
- 2025-07-06

### Error 2025-07-06T00:48:43+00:00
```
2025-07-06T00:48:43.0076571Z === RUN   TestMigStreamProcessor_basic
2025-07-06T00:48:43.0077107Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-7477380993420125797
2025-07-06T00:48:43.0301842Z === CONT  TestMigStreamProcessor_basic
2025-07-06T00:48:43.0385169Z === NAME  TestMigStreamProcessor_basic
2025-07-06T00:48:43.0385662Z     resource_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-07-06T00:48:43.0386044Z         
2025-07-06T00:48:43.0386302Z         Error: error creating resource
2025-07-06T00:48:43.0386558Z         
2025-07-06T00:48:43.0386900Z           with mongodbatlas_stream_processor.processor,
2025-07-06T00:48:43.0387685Z           on terraform_plugin_test.tf line 37, in resource "mongodbatlas_stream_processor" "processor":
2025-07-06T00:48:43.0388306Z           37: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-06T00:48:43.0388624Z         
2025-07-06T00:48:43.0389339Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c40b690ae45e168bd561/streams/test-acc-tf-2853761433766751037/processor
2025-07-06T00:48:43.0390134Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-06T00:48:43.0390765Z         Detail: Streams Processor with this name (new-processor) had a problem occur:
2025-07-06T00:48:43.0391396Z         failed to acquire resources for stream processor validation: internal error
2025-07-06T00:48:43.0392002Z         while provisioning resource from global resource manager. Reason: Bad
2025-07-06T00:48:43.0392605Z         Request. Params: [new-processor failed to acquire resources for stream
2025-07-06T00:48:43.0393249Z         processor validation: internal error while provisioning resource from global
2025-07-06T00:48:43.0393850Z         resource manager], BadRequestDetail: 
2025-07-06T00:48:43.0400166Z    test_name=TestMigStreamProcessor_basic test_terraform_path=/home/runner/work/_temp/571f2434-2bee-44d0-b41d-cfc3e67d82b8/terraform
2025-07-06T00:48:43.0400989Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-06T00:48:43.0401540Z         
2025-07-06T00:48:43.0401809Z         Error: error deleting resource
2025-07-06T00:48:43.0402071Z         
2025-07-06T00:48:43.0402916Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c40b690ae45e168bd561/streams/test-acc-tf-2853761433766751037/connections/sample_stream_solar
2025-07-06T00:48:43.0403672Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-06T00:48:43.0404202Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-06T00:48:43.0404810Z         name test-acc-tf-2853761433766751037 has active processors, and cannot be
2025-07-06T00:48:43.0405409Z         changed. Reason: Forbidden. Params: [test-acc-tf-2853761433766751037],
2025-07-06T00:48:43.0405812Z         BadRequestDetail: 
2025-07-06T00:48:43.0406089Z --- FAIL: TestMigStreamProcessor_basic (36.16s)
```

- 2025-07-07 PASS 11 seconds
- 2025-07-08 PASS 11 seconds
- 2025-07-09 PASS 14 seconds
- 2025-07-10
  - PASS 32 seconds
  - PASS 35 seconds
- 2025-07-11 PASS 13 seconds
- 2025-07-12 PASS 21 seconds
- 2025-07-13

### Error 2025-07-13T00:52:25+00:00
```
2025-07-13T00:52:25.1925438Z === RUN   TestMigStreamProcessor_basic
2025-07-13T00:52:25.1926606Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-2878050819983717175
2025-07-13T00:52:25.1993520Z === CONT  TestMigStreamProcessor_basic
2025-07-13T00:52:25.2165804Z === NAME  TestMigStreamProcessor_basic
2025-07-13T00:52:25.2166306Z     resource_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-07-13T00:52:25.2166696Z         
2025-07-13T00:52:25.2166966Z         Error: error creating resource
2025-07-13T00:52:25.2167226Z         
2025-07-13T00:52:25.2167590Z           with mongodbatlas_stream_processor.processor,
2025-07-13T00:52:25.2168450Z           on terraform_plugin_test.tf line 37, in resource "mongodbatlas_stream_processor" "processor":
2025-07-13T00:52:25.2169100Z           37: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-13T00:52:25.2169423Z         
2025-07-13T00:52:25.2170174Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6872fe96006d8d55bbaa2991/streams/test-acc-tf-1578256641712202694/processor
2025-07-13T00:52:25.2171183Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-13T00:52:25.2171874Z         Detail: Streams Processor with this name (new-processor) had a problem occur:
2025-07-13T00:52:25.2172540Z         failed to acquire resources for stream processor validation: internal error
2025-07-13T00:52:25.2173168Z         while provisioning resource from global resource manager. Reason: Bad
2025-07-13T00:52:25.2173777Z         Request. Params: [new-processor failed to acquire resources for stream
2025-07-13T00:52:25.2174427Z         processor validation: internal error while provisioning resource from global
2025-07-13T00:52:25.2174930Z         resource manager], BadRequestDetail: 
2025-07-13T00:52:25.2181437Z    test_terraform_path=/home/runner/work/_temp/2b3946cc-f842-4080-aa31-05bfa9ec016b/terraform
2025-07-13T00:52:25.2182145Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-13T00:52:25.2182573Z         
2025-07-13T00:52:25.2182845Z         Error: error deleting resource
2025-07-13T00:52:25.2183111Z         
2025-07-13T00:52:25.2183973Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6872fe96006d8d55bbaa2991/streams/test-acc-tf-1578256641712202694/connections/sample_stream_solar
2025-07-13T00:52:25.2184725Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-13T00:52:25.2185295Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-13T00:52:25.2186092Z         name test-acc-tf-1578256641712202694 has active processors, and cannot be
2025-07-13T00:52:25.2186708Z         changed. Reason: Forbidden. Params: [test-acc-tf-1578256641712202694],
2025-07-13T00:52:25.2187117Z         BadRequestDetail: 
2025-07-13T00:52:25.2187403Z --- FAIL: TestMigStreamProcessor_basic (34.65s)
```

- 2025-07-14 PASS 11 seconds
- 2025-07-15 PASS 11 seconds
- 2025-07-16 PASS 13 seconds
- 2025-07-17 PASS 9 seconds
- 2025-07-18 PASS 12 seconds
- 2025-07-19 PASS 10 seconds
- 2025-07-20

### Error 2025-07-20T00:53:03+00:00
```
2025-07-20T00:53:03.6957509Z === RUN   TestMigStreamProcessor_basic
2025-07-20T00:53:03.6958055Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-4466811167949558853
2025-07-20T00:53:03.6958789Z     resource_migration_test.go:11: Creating execution stream instance: test-acc-tf-s-9049831376135069608
2025-07-20T00:53:03.6959467Z     resource_migration_test.go:11: 
2025-07-20T00:53:03.6961229Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:104
2025-07-20T00:53:03.6963411Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:154
2025-07-20T00:53:03.6965212Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:49
2025-07-20T00:53:03.6967324Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_migration_test.go:11
2025-07-20T00:53:03.6968120Z         	Error:      	Received unexpected error:
2025-07-20T00:53:03.6970185Z         	            	https://cloud-qa.mongodb.com/api/atlas/v2/groups/687c393e823af9166ef91845/streams POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-07-20T00:53:03.6972469Z         	Test:       	TestMigStreamProcessor_basic
2025-07-20T00:53:03.6976215Z         	Messages:   	Stream instance creation failed: test-acc-tf-s-9049831376135069608, err: https://cloud-qa.mongodb.com/api/atlas/v2/groups/687c393e823af9166ef91845/streams POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-07-20T00:53:03.6978196Z --- FAIL: TestMigStreamProcessor_basic (33.82s)
```

- 2025-07-21 PASS 13 seconds
- 2025-07-22 PASS 11 seconds
- 2025-07-23
  - PASS 10 seconds
  - PASS 12 seconds
- 2025-07-24 PASS 11 seconds
- 2025-07-25 PASS 13 seconds
- 2025-07-26 PASS 12 seconds
- 2025-07-27 PASS 25 seconds
- 2025-07-28 PASS 11 seconds
- 2025-07-29 PASS 9 seconds
- 2025-07-30 PASS 11 seconds