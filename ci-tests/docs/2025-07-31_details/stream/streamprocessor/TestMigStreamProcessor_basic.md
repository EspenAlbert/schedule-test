# stream/streamprocessor/TestMigStreamProcessor_basic Test Details
# Found 33 TestRuns in dev, qa from 2025-07-01 to 2025-07-31 from master branch: 1 unique tests, PASS(x 29) FAIL(x 4)
Success rate: 87.88%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-02 00:46](#error-2025-07-02t0046310000) | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 34.07s
[2025-07-06 00:48](#error-2025-07-06t0048430000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6869c40b690ae45e168bd561/streams/test-acc-tf-2853761433766751037/processor | qa |  | 36.02s
[2025-07-13 00:52](#error-2025-07-13t0052250000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6872fe96006d8d55bbaa2991/streams/test-acc-tf-1578256641712202694/processor | qa |  | 34.06s
[2025-07-20 00:53](#error-2025-07-20t0053030000) | UNEXPECTED_ERROR /api/atlas/v2/groups/687c393e823af9166ef91845/streams | qa | flaky_500 | 33.08s

## Timeline
- 2025-07-01 PASS 13 seconds
- 2025-07-02

### Error 2025-07-02T00:46:31+00:00
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-07-02T00:46:31.920000+00:00-TestMigStreamProcessor_basic',confidence=1.0,ts_when='29 days ago')
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
- 2025-07-31 PASS 12 seconds