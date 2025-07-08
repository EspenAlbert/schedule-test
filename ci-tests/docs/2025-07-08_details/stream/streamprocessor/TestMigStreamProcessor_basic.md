# stream/streamprocessor/TestMigStreamProcessor_basic Test Details
# Found 10 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 8) FAIL(x 2)
Success rate: 80.00%

## Timeline
### 2025-07-01
#### PASS 16 seconds
```
2025-07-01T08:50:28.2729731Z === RUN   TestMigStreamProcessor_basic
2025-07-01T08:50:28.2730745Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-6455120340503680040
2025-07-01T08:50:28.2835605Z === CONT  TestMigStreamProcessor_basic
2025-07-01T08:50:28.2855756Z --- PASS: TestMigStreamProcessor_basic (16.76s)
```
#### PASS 10 seconds
```
2025-07-01T12:50:20.6071645Z === RUN   TestMigStreamProcessor_basic
2025-07-01T12:50:20.6072186Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-5239256197598282775
2025-07-01T12:50:20.6126476Z === CONT  TestMigStreamProcessor_basic
2025-07-01T12:50:20.6136745Z --- PASS: TestMigStreamProcessor_basic (10.09s)
```
#### PASS 13 seconds
```
2025-07-01T17:50:24.3480616Z === RUN   TestMigStreamProcessor_basic
2025-07-01T17:50:24.3481596Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-9019735662383270141
2025-07-01T17:50:24.3581332Z === CONT  TestMigStreamProcessor_basic
2025-07-01T17:50:24.3600317Z --- PASS: TestMigStreamProcessor_basic (13.78s)
```
### 2025-07-02
#### FAIL 34 seconds
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-07-02T00:46:31.920000+00:00-TestMigStreamProcessor_basic',confidence=1.0,ts_when='5 days ago')
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
### 2025-07-03
#### PASS 12 seconds
```
2025-07-03T00:46:39.9539869Z === RUN   TestMigStreamProcessor_basic
2025-07-03T00:46:39.9540421Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-8583842408881811517
2025-07-03T00:46:39.9793138Z === CONT  TestMigStreamProcessor_basic
2025-07-03T00:46:39.9803047Z --- PASS: TestMigStreamProcessor_basic (12.18s)
```
### 2025-07-04
#### PASS 24 seconds
```
2025-07-04T00:51:07.7049665Z === RUN   TestMigStreamProcessor_basic
2025-07-04T00:51:07.7051075Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-8198124604156082223
2025-07-04T00:51:07.7212686Z === CONT  TestMigStreamProcessor_basic
2025-07-04T00:51:07.7224620Z --- PASS: TestMigStreamProcessor_basic (24.74s)
```
### 2025-07-05
#### PASS 14 seconds
```
2025-07-05T00:44:07.5866567Z === RUN   TestMigStreamProcessor_basic
2025-07-05T00:44:07.5867521Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-7838024867408675840
2025-07-05T00:44:07.6141324Z === CONT  TestMigStreamProcessor_basic
2025-07-05T00:44:07.6152001Z --- PASS: TestMigStreamProcessor_basic (14.83s)
```
### 2025-07-06
#### FAIL 36 seconds
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
### 2025-07-07
#### PASS 11 seconds
```
2025-07-07T00:48:05.7809846Z === RUN   TestMigStreamProcessor_basic
2025-07-07T00:48:05.7810387Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-2946717767474413480
2025-07-07T00:48:05.8094072Z === CONT  TestMigStreamProcessor_basic
2025-07-07T00:48:05.8104463Z --- PASS: TestMigStreamProcessor_basic (11.38s)
```
### 2025-07-08
#### PASS 11 seconds
```
2025-07-08T00:45:56.1162096Z === RUN   TestMigStreamProcessor_basic
2025-07-08T00:45:56.1163196Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-8035210403101676368
2025-07-08T00:45:56.1508910Z === CONT  TestMigStreamProcessor_basic
2025-07-08T00:45:56.1527525Z --- PASS: TestMigStreamProcessor_basic (11.03s)
```