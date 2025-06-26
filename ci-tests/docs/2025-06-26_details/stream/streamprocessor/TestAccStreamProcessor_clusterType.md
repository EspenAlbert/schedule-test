# stream/streamprocessor/TestAccStreamProcessor_clusterType Test Details
# Found 9 TestRuns in dev, qa from 2025-06-20 to 2025-06-26 from master branch: 1 unique tests, PASS(x 5) FAIL(x 4)
Success rate: 55.56%

## Timeline
2025-06-19: MISSING
### 2025-06-20
#### PASS 12 seconds
```
2025-06-20T00:45:53.6907203Z === RUN   TestAccStreamProcessor_clusterType
2025-06-20T00:45:53.6910035Z === CONT  TestAccStreamProcessor_clusterType
2025-06-20T00:45:53.6911803Z   diagnostic_detail=
2025-06-20T00:45:53.6914218Z    diagnostic_severity=ERROR tf_proto_version=6.9 tf_rpc=ValidateResourceConfig diagnostic_summary="Invalid JSON String Value" diagnostic_attribute="AttributeName(\"pipeline\")"
2025-06-20T00:45:53.6918254Z --- PASS: TestAccStreamProcessor_clusterType (12.57s)
```
### 2025-06-21
#### PASS 12 seconds
```
2025-06-21T00:43:49.5551483Z === RUN   TestAccStreamProcessor_clusterType
2025-06-21T00:43:49.5556040Z === CONT  TestAccStreamProcessor_clusterType
2025-06-21T00:43:49.5572057Z --- PASS: TestAccStreamProcessor_clusterType (12.36s)
```
### 2025-06-22
#### PASS 49 seconds
```
2025-06-22T00:49:55.8472128Z === RUN   TestAccStreamProcessor_clusterType
2025-06-22T00:49:55.8475038Z === CONT  TestAccStreamProcessor_clusterType
2025-06-22T00:49:55.8485677Z --- PASS: TestAccStreamProcessor_clusterType (49.55s)
```
### 2025-06-23
#### FAIL 32 seconds
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-06-23T00:45:53.894000+00:00-TestAccStreamProcessor_clusterType',confidence=1.0,ts_when='3 days ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-06-23T00:45:53.8948061Z === RUN   TestAccStreamProcessor_clusterType
2025-06-23T00:45:53.8953330Z === CONT  TestAccStreamProcessor_clusterType
2025-06-23T00:45:53.8957081Z   diagnostic_detail=
2025-06-23T00:45:53.8960925Z    tf_resource_type=mongodbatlas_stream_processor tf_req_id=95c94423-39ce-c859-131c-e9abc817ee65 tf_rpc=ValidateResourceConfig
2025-06-23T00:45:53.9040028Z === NAME  TestAccStreamProcessor_clusterType
2025-06-23T00:45:53.9040830Z     resource_test.go:264: Step 1/1 error: Error running apply: exit status 1
2025-06-23T00:45:53.9041431Z         
2025-06-23T00:45:53.9041895Z         Error: error creating resource
2025-06-23T00:45:53.9042334Z         
2025-06-23T00:45:53.9042935Z           with mongodbatlas_stream_processor.processor,
2025-06-23T00:45:53.9044298Z           on terraform_plugin_test.tf line 37, in resource "mongodbatlas_stream_processor" "processor":
2025-06-23T00:45:53.9045415Z           37: 		resource "mongodbatlas_stream_processor" "processor" {
2025-06-23T00:45:53.9045964Z         
2025-06-23T00:45:53.9047278Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6858a0519c500e6d1cbd646c/streams/test-acc-tf-2852821018017757199/processor
2025-06-23T00:45:53.9048705Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-06-23T00:45:53.9049823Z         Detail: Streams Processor with this name (new-processor) had a problem occur:
2025-06-23T00:45:53.9050959Z         failed to acquire resources for stream processor validation: internal error
2025-06-23T00:45:53.9052045Z         while provisioning resource from global resource manager. Reason: Bad
2025-06-23T00:45:53.9053238Z         Request. Params: [new-processor failed to acquire resources for stream
2025-06-23T00:45:53.9054364Z         processor validation: internal error while provisioning resource from global
2025-06-23T00:45:53.9055210Z         resource manager], BadRequestDetail: 
2025-06-23T00:45:53.9076169Z    test_working_directory=/tmp/plugintest3820735498
2025-06-23T00:45:53.9150610Z === NAME  TestAccStreamProcessor_clusterType
2025-06-23T00:45:53.9151294Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-23T00:45:53.9151734Z         
2025-06-23T00:45:53.9152009Z         Error: error deleting resource
2025-06-23T00:45:53.9152269Z         
2025-06-23T00:45:53.9153238Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6858a0519c500e6d1cbd646c/streams/test-acc-tf-2852821018017757199/connections/ClusterConnectionSrc
2025-06-23T00:45:53.9154023Z         DELETE: HTTP 403 Forbidden (Error code:
2025-06-23T00:45:53.9154549Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-06-23T00:45:53.9155162Z         name test-acc-tf-2852821018017757199 has active processors, and cannot be
2025-06-23T00:45:53.9155765Z         changed. Reason: Forbidden. Params: [test-acc-tf-2852821018017757199],
2025-06-23T00:45:53.9156175Z         BadRequestDetail: 
2025-06-23T00:45:53.9156472Z --- FAIL: TestAccStreamProcessor_clusterType (32.19s)
```
### 2025-06-24
#### FAIL 31 seconds
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-06-24T00:45:42.329000+00:00-TestAccStreamProcessor_clusterType',confidence=1.0,ts_when='2 days ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-06-24T00:45:42.3292300Z === RUN   TestAccStreamProcessor_clusterType
2025-06-24T00:45:42.3294828Z === CONT  TestAccStreamProcessor_clusterType
2025-06-24T00:45:42.3320145Z === NAME  TestAccStreamProcessor_clusterType
2025-06-24T00:45:42.3320613Z     resource_test.go:264: Step 1/1 error: Error running apply: exit status 1
2025-06-24T00:45:42.3320962Z         
2025-06-24T00:45:42.3321226Z         Error: error creating resource
2025-06-24T00:45:42.3321596Z         
2025-06-24T00:45:42.3321952Z           with mongodbatlas_stream_processor.processor,
2025-06-24T00:45:42.3322631Z           on terraform_plugin_test.tf line 37, in resource "mongodbatlas_stream_processor" "processor":
2025-06-24T00:45:42.3323259Z           37: 		resource "mongodbatlas_stream_processor" "processor" {
2025-06-24T00:45:42.3323574Z         
2025-06-24T00:45:42.3324309Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6859f14f22100658cf2667ae/streams/test-acc-tf-5398124186021471858/processor
2025-06-24T00:45:42.3325106Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-06-24T00:45:42.3325733Z         Detail: Streams Processor with this name (new-processor) had a problem occur:
2025-06-24T00:45:42.3326390Z         failed to acquire resources for stream processor validation: internal error
2025-06-24T00:45:42.3326997Z         while provisioning resource from global resource manager. Reason: Bad
2025-06-24T00:45:42.3327590Z         Request. Params: [new-processor failed to acquire resources for stream
2025-06-24T00:45:42.3328229Z         processor validation: internal error while provisioning resource from global
2025-06-24T00:45:42.3328891Z         resource manager], BadRequestDetail: 
2025-06-24T00:45:42.3341188Z   
2025-06-24T00:45:42.3341657Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-24T00:45:42.3342074Z         
2025-06-24T00:45:42.3342342Z         Error: error deleting resource
2025-06-24T00:45:42.3342604Z         
2025-06-24T00:45:42.3343464Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6859f14f22100658cf2667ae/streams/test-acc-tf-5398124186021471858/connections/ClusterConnectionSrc
2025-06-24T00:45:42.3344233Z         DELETE: HTTP 403 Forbidden (Error code:
2025-06-24T00:45:42.3344762Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-06-24T00:45:42.3345375Z         name test-acc-tf-5398124186021471858 has active processors, and cannot be
2025-06-24T00:45:42.3345967Z         changed. Reason: Forbidden. Params: [test-acc-tf-5398124186021471858],
2025-06-24T00:45:42.3346368Z         BadRequestDetail: 
2025-06-24T00:45:42.3346665Z --- FAIL: TestAccStreamProcessor_clusterType (31.36s)
```
### 2025-06-25
#### PASS 12 seconds
```
2025-06-25T00:45:03.6189061Z === RUN   TestAccStreamProcessor_clusterType
2025-06-25T00:45:03.6194133Z === CONT  TestAccStreamProcessor_clusterType
2025-06-25T00:45:03.6195680Z   diagnostic_detail=
2025-06-25T00:45:03.6201277Z    tf_proto_version=6.9 diagnostic_severity=ERROR diagnostic_summary="Invalid JSON String Value" diagnostic_attribute="AttributeName(\"pipeline\")" tf_req_id=594694b2-6be0-d576-4e4f-c4554e42d594 tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas tf_rpc=ValidateResourceConfig tf_resource_type=mongodbatlas_stream_processor
2025-06-25T00:45:03.6209932Z --- PASS: TestAccStreamProcessor_clusterType (12.53s)
```
#### FAIL 31 seconds
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-06-25T06:57:33.835000+00:00-TestAccStreamProcessor_clusterType',confidence=1.0,ts_when='a day ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-06-25T06:57:33.8356764Z === RUN   TestAccStreamProcessor_clusterType
2025-06-25T06:57:33.8360187Z === CONT  TestAccStreamProcessor_clusterType
2025-06-25T06:57:33.8361661Z   diagnostic_detail=
2025-06-25T06:57:33.8364506Z    diagnostic_summary="Invalid JSON String Value" tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas tf_resource_type=mongodbatlas_stream_processor diagnostic_severity=ERROR diagnostic_attribute="AttributeName(\"pipeline\")"
2025-06-25T06:57:33.8385910Z === NAME  TestAccStreamProcessor_clusterType
2025-06-25T06:57:33.8386398Z     resource_test.go:264: Step 1/1 error: Error running apply: exit status 1
2025-06-25T06:57:33.8386790Z         
2025-06-25T06:57:33.8387094Z         Error: error creating resource
2025-06-25T06:57:33.8387572Z         
2025-06-25T06:57:33.8387958Z           with mongodbatlas_stream_processor.processor,
2025-06-25T06:57:33.8388666Z           on terraform_plugin_test.tf line 37, in resource "mongodbatlas_stream_processor" "processor":
2025-06-25T06:57:33.8389321Z           37: 		resource "mongodbatlas_stream_processor" "processor" {
2025-06-25T06:57:33.8389667Z         
2025-06-25T06:57:33.8390430Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/685b9a1d2b85d3299b8af326/streams/test-acc-tf-2868161420974964046/processor
2025-06-25T06:57:33.8391273Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-06-25T06:57:33.8391931Z         Detail: Streams Processor with this name (new-processor) had a problem occur:
2025-06-25T06:57:33.8392606Z         failed to acquire resources for stream processor validation: internal error
2025-06-25T06:57:33.8393256Z         while provisioning resource from global resource manager. Reason: Bad
2025-06-25T06:57:33.8393878Z         Request. Params: [new-processor failed to acquire resources for stream
2025-06-25T06:57:33.8394543Z         processor validation: internal error while provisioning resource from global
2025-06-25T06:57:33.8395063Z         resource manager], BadRequestDetail: 
2025-06-25T06:57:33.8417208Z    test_name=TestAccStreamProcessor_JSONWhiteSpaceFormat test_terraform_path=/home/runner/work/_temp/15d5fe85-f979-4fd8-8262-c0d2e6804eb4/terraform test_working_directory=/tmp/plugintest4235431070 test_step_number=1
2025-06-25T06:57:33.8434940Z === NAME  TestAccStreamProcessor_clusterType
2025-06-25T06:57:33.8435518Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-25T06:57:33.8435967Z         
2025-06-25T06:57:33.8436267Z         Error: error deleting resource
2025-06-25T06:57:33.8436552Z         
2025-06-25T06:57:33.8437560Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/685b9a1d2b85d3299b8af326/streams/test-acc-tf-2868161420974964046/connections/ClusterConnectionSrc
2025-06-25T06:57:33.8438358Z         DELETE: HTTP 403 Forbidden (Error code:
2025-06-25T06:57:33.8438917Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-06-25T06:57:33.8439561Z         name test-acc-tf-2868161420974964046 has active processors, and cannot be
2025-06-25T06:57:33.8440189Z         changed. Reason: Forbidden. Params: [test-acc-tf-2868161420974964046],
2025-06-25T06:57:33.8440629Z         BadRequestDetail: 
2025-06-25T06:57:33.8440950Z --- FAIL: TestAccStreamProcessor_clusterType (31.53s)
```
### 2025-06-26
#### PASS 13 seconds
```
2025-06-26T00:44:37.3243688Z === RUN   TestAccStreamProcessor_clusterType
2025-06-26T00:44:37.3246653Z === CONT  TestAccStreamProcessor_clusterType
2025-06-26T00:44:37.3255699Z --- PASS: TestAccStreamProcessor_clusterType (13.82s)
```
#### FAIL 31 seconds
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-06-26T04:28:17.645000+00:00-TestAccStreamProcessor_clusterType',confidence=1.0,ts_when='2 hours ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-06-26T04:28:17.6453537Z === RUN   TestAccStreamProcessor_clusterType
2025-06-26T04:28:17.6456285Z === CONT  TestAccStreamProcessor_clusterType
2025-06-26T04:28:17.6532195Z === NAME  TestAccStreamProcessor_clusterType
2025-06-26T04:28:17.6532668Z     resource_test.go:264: Step 1/1 error: Error running apply: exit status 1
2025-06-26T04:28:17.6533025Z         
2025-06-26T04:28:17.6533293Z         Error: error creating resource
2025-06-26T04:28:17.6533560Z         
2025-06-26T04:28:17.6533918Z           with mongodbatlas_stream_processor.processor,
2025-06-26T04:28:17.6534601Z           on terraform_plugin_test.tf line 37, in resource "mongodbatlas_stream_processor" "processor":
2025-06-26T04:28:17.6535242Z           37: 		resource "mongodbatlas_stream_processor" "processor" {
2025-06-26T04:28:17.6535571Z         
2025-06-26T04:28:17.6536302Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/685cc90e0461cf3cf51967fb/streams/test-acc-tf-320582517567213773/processor
2025-06-26T04:28:17.6537116Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-06-26T04:28:17.6537761Z         Detail: Streams Processor with this name (new-processor) had a problem occur:
2025-06-26T04:28:17.6538411Z         failed to acquire resources for stream processor validation: internal error
2025-06-26T04:28:17.6539246Z         while provisioning resource from global resource manager. Reason: Bad
2025-06-26T04:28:17.6539867Z         Request. Params: [new-processor failed to acquire resources for stream
2025-06-26T04:28:17.6540521Z         processor validation: internal error while provisioning resource from global
2025-06-26T04:28:17.6541016Z         resource manager], BadRequestDetail: 
2025-06-26T04:28:17.6557994Z    test_name=TestAccStreamProcessor_clusterType test_terraform_path=/home/runner/work/_temp/cbc21922-5526-4103-a927-c66450bd2cac/terraform test_working_directory=/tmp/plugintest3575407517
2025-06-26T04:28:17.6559183Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-26T04:28:17.6559624Z         
2025-06-26T04:28:17.6559900Z         Error: error deleting resource
2025-06-26T04:28:17.6560164Z         
2025-06-26T04:28:17.6561024Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/685cc90e0461cf3cf51967fb/streams/test-acc-tf-320582517567213773/connections/ClusterConnectionSrc
2025-06-26T04:28:17.6561786Z         DELETE: HTTP 403 Forbidden (Error code:
2025-06-26T04:28:17.6562322Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-06-26T04:28:17.6562941Z         name test-acc-tf-320582517567213773 has active processors, and cannot be
2025-06-26T04:28:17.6563546Z         changed. Reason: Forbidden. Params: [test-acc-tf-320582517567213773],
2025-06-26T04:28:17.6563961Z         BadRequestDetail: 
2025-06-26T04:28:17.6564260Z --- FAIL: TestAccStreamProcessor_clusterType (31.55s)
```