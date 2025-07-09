# stream/streamprocessor/TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped Test Details
# Found 132 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 102) FAIL(x 30)
Success rate: 77.27%

# #  Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
2025-04-13 01:10 |  | qa |  | 4.08s
2025-04-16 00:45 |  | dev |  | 1.01s
2025-04-16 12:49 |  | qa |  | 4.01s
2025-04-16 14:37 |  | dev |  | 1.06s
2025-04-17 00:44 |  | dev |  | 1.01s
2025-04-20 00:49 |  | qa |  | 4.08s
2025-04-24 00:43 |  | dev |  | 5.04s
2025-04-25 00:44 |  | dev |  | 4.05s
2025-04-26 00:45 |  | dev |  | 5.01s
2025-04-27 00:47 |  | qa |  | 4.02s
2025-04-28 00:45 |  | dev |  | 3.02s
2025-04-30 09:23 |  | qa |  | 3.09s
2025-05-01 02:17 |  | dev |  | 4.09s
2025-05-01 03:43 |  | dev |  | 4.04s
2025-05-01 05:07 |  | dev |  | 4.05s
2025-05-01 06:33 |  | dev |  | 4.02s
2025-05-01 08:00 |  | dev |  | 4.09s
2025-05-01 09:23 |  | dev |  | 4.03s
2025-05-02 00:45 |  | dev |  | 3.09s
2025-05-03 00:44 |  | dev |  | 3.02s
2025-05-04 00:47 |  | qa |  | 6.00s
2025-05-05 00:44 |  | dev |  | 2.06s
2025-05-05 10:43 |  | qa |  | 3.00s
2025-05-06 00:45 |  | dev |  | 4.03s
2025-05-11 00:30 |  | qa |  | 0.00s
2025-05-23 00:49 |  | dev |  | 4.03s
2025-07-03 00:46 | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 31.03s
2025-07-07 00:48 |  | dev |  | 31.01s
2025-07-08 00:45 | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 31.02s
2025-07-09 01:00 | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 31.02s

## Timeline
2025-03-11: MISSING
2025-03-12: MISSING
2025-03-13: MISSING
2025-03-14: MISSING
2025-03-15: MISSING
2025-03-16: MISSING
2025-03-17: MISSING
2025-03-18: MISSING
2025-03-19: MISSING
2025-03-20: MISSING
2025-03-21: MISSING
2025-03-22: MISSING
2025-03-23: MISSING
2025-03-24: MISSING
2025-03-25: MISSING
2025-03-26: MISSING
2025-03-27: MISSING
2025-03-28: MISSING
2025-03-29: MISSING
2025-03-30: MISSING
2025-03-31: MISSING
2025-04-01: MISSING
2025-04-02: MISSING
2025-04-03: MISSING
2025-04-04: MISSING
2025-04-05: MISSING
2025-04-06: MISSING
2025-04-07: MISSING
2025-04-08: MISSING
2025-04-09: MISSING
2025-04-10: MISSING
### 2025-04-11
#### PASS 6 seconds
### 2025-04-12
#### PASS 6 seconds
### 2025-04-13
#### FAIL 4 seconds
```
2025-04-13T01:10:38.8035204Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-04-13T01:10:38.8035928Z     resource_test.go:250: Testing: Verifies a processor cannot transition from CREATED to STOPPED state
2025-04-13T01:10:38.8041086Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-04-13T01:10:38.8104812Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-04-13T01:10:38.8105420Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-04-13T01:10:38.8105784Z         
2025-04-13T01:10:38.8106076Z         Error: error creating resource
2025-04-13T01:10:38.8106350Z         
2025-04-13T01:10:38.8106723Z           with mongodbatlas_stream_processor.processor,
2025-04-13T01:10:38.8107553Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-13T01:10:38.8108200Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-13T01:10:38.8108536Z         
2025-04-13T01:10:38.8109384Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/67fb0a6a2ef24d0491ef3bad/streams/test-acc-tf-6747881498080465560--CREATED-STOPPED/processor
2025-04-13T01:10:38.8110369Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-13T01:10:38.8111041Z         Detail: Streams Processor with this name (processor-created-to-stopped) had a
2025-04-13T01:10:38.8111715Z         problem occur: failed to acquire resources for stream processor validation:
2025-04-13T01:10:38.8112370Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-04-13T01:10:38.8113003Z         [processor-created-to-stopped failed to acquire resources for stream
2025-04-13T01:10:38.8113633Z         processor validation: global resource manager returned no resources],
2025-04-13T01:10:38.8114065Z         BadRequestDetail: 
2025-04-13T01:10:38.8127556Z   
2025-04-13T01:10:38.8128040Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-13T01:10:38.8128469Z         
2025-04-13T01:10:38.8128752Z         Error: error deleting resource
2025-04-13T01:10:38.8129028Z         
2025-04-13T01:10:38.8130203Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/67fb0a6a2ef24d0491ef3bad/streams/test-acc-tf-6747881498080465560--CREATED-STOPPED/connections/sample_stream_solar
2025-04-13T01:10:38.8131049Z         DELETE: HTTP 403 Forbidden (Error code:
2025-04-13T01:10:38.8131595Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-04-13T01:10:38.8132255Z         name test-acc-tf-6747881498080465560--CREATED-STOPPED has active processors,
2025-04-13T01:10:38.8132930Z         and cannot be changed. Reason: Forbidden. Params:
2025-04-13T01:10:38.8133485Z         [test-acc-tf-6747881498080465560--CREATED-STOPPED], BadRequestDetail: 
2025-04-13T01:10:38.8149222Z    test_working_directory=/tmp/plugintest3178695239 test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated test_terraform_path=/home/runner/work/_temp/34096c15-8473-462c-9c24-11172a2d6b2d/terraform test_step_number=1
2025-04-13T01:10:38.8180994Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped (4.79s)
```
### 2025-04-14
#### PASS 8 seconds
### 2025-04-15
#### PASS 7 seconds
### 2025-04-16
#### FAIL a second
```
2025-04-16T00:45:12.3684392Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-04-16T00:45:12.3684798Z     resource_test.go:250: Testing: Verifies a processor cannot transition from CREATED to STOPPED state
2025-04-16T00:45:12.3687165Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-04-16T00:45:12.3697642Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-04-16T00:45:12.3697922Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-04-16T00:45:12.3698011Z         
2025-04-16T00:45:12.3698187Z         Error: error creating resource
2025-04-16T00:45:12.3698293Z         
2025-04-16T00:45:12.3698553Z           with mongodbatlas_stream_processor.processor,
2025-04-16T00:45:12.3699032Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-16T00:45:12.3699355Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-16T00:45:12.3699454Z         
2025-04-16T00:45:12.3700195Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67fef96383625331ad35237f/streams/test-acc-tf-2303189526790432619--CREATED-STOPPED/processor
2025-04-16T00:45:12.3700543Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-16T00:45:12.3700930Z         Detail: Streams Processor with this name (processor-created-to-stopped) had a
2025-04-16T00:45:12.3701236Z         problem occur: RBAC: access denied. Reason: Bad Request. Params:
2025-04-16T00:45:12.3701582Z         [processor-created-to-stopped RBAC: access denied], BadRequestDetail: 
2025-04-16T00:45:12.3705906Z   
2025-04-16T00:45:12.3736170Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-04-16T00:45:12.3736546Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T00:45:12.3736647Z         
2025-04-16T00:45:12.3736825Z         Error: error deleting resource
2025-04-16T00:45:12.3736912Z         
2025-04-16T00:45:12.3737786Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67fef96383625331ad35237f/streams/test-acc-tf-2303189526790432619--CREATED-STOPPED/connections/sample_stream_solar
2025-04-16T00:45:12.3738121Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T00:45:12.3738451Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T00:45:12.3738601Z         BadRequestDetail: 
2025-04-16T00:45:12.3744574Z   
2025-04-16T00:45:12.3756243Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped (1.11s)
```
#### FAIL 4 seconds
```
2025-04-16T12:49:32.8751598Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-04-16T12:49:32.8752000Z     resource_test.go:250: Testing: Verifies a processor cannot transition from CREATED to STOPPED state
2025-04-16T12:49:32.8754248Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-04-16T12:49:32.8767712Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-04-16T12:49:32.8767993Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-04-16T12:49:32.8768083Z         
2025-04-16T12:49:32.8768259Z         Error: error creating resource
2025-04-16T12:49:32.8768350Z         
2025-04-16T12:49:32.8768608Z           with mongodbatlas_stream_processor.processor,
2025-04-16T12:49:32.8769255Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-16T12:49:32.8769752Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-16T12:49:32.8769862Z         
2025-04-16T12:49:32.8770616Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/67ffa2daaeda942dc8ba2ae5/streams/test-acc-tf-7677350664502490102--CREATED-STOPPED/processor
2025-04-16T12:49:32.8770954Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-16T12:49:32.8771338Z         Detail: Streams Processor with this name (processor-created-to-stopped) had a
2025-04-16T12:49:32.8771639Z         problem occur: RBAC: access denied. Reason: Bad Request. Params:
2025-04-16T12:49:32.8771986Z         [processor-created-to-stopped RBAC: access denied], BadRequestDetail: 
2025-04-16T12:49:32.8776059Z   
2025-04-16T12:49:32.8807558Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-04-16T12:49:32.8807939Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T12:49:32.8808107Z         
2025-04-16T12:49:32.8808302Z         Error: error deleting resource
2025-04-16T12:49:32.8808397Z         
2025-04-16T12:49:32.8809678Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/67ffa2daaeda942dc8ba2ae5/streams/test-acc-tf-7677350664502490102--CREATED-STOPPED/connections/sample_stream_solar
2025-04-16T12:49:32.8810125Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T12:49:32.8810468Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T12:49:32.8810613Z         BadRequestDetail: 
2025-04-16T12:49:32.8814239Z   
2025-04-16T12:49:32.8818351Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped (4.09s)
```
#### FAIL a second
```
2025-04-16T14:37:27.0746089Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-04-16T14:37:27.0746498Z     resource_test.go:250: Testing: Verifies a processor cannot transition from CREATED to STOPPED state
2025-04-16T14:37:27.0748832Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-04-16T14:37:27.0756730Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-04-16T14:37:27.0757013Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-04-16T14:37:27.0757112Z         
2025-04-16T14:37:27.0757284Z         Error: error creating resource
2025-04-16T14:37:27.0757379Z         
2025-04-16T14:37:27.0757641Z           with mongodbatlas_stream_processor.processor,
2025-04-16T14:37:27.0758125Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-16T14:37:27.0758561Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-16T14:37:27.0758656Z         
2025-04-16T14:37:27.0759419Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67ffbd1751a0bf7e37921337/streams/test-acc-tf-3192611342344900936--CREATED-STOPPED/processor
2025-04-16T14:37:27.0759754Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-16T14:37:27.0760144Z         Detail: Streams Processor with this name (processor-created-to-stopped) had a
2025-04-16T14:37:27.0760453Z         problem occur: RBAC: access denied. Reason: Bad Request. Params:
2025-04-16T14:37:27.0760807Z         [processor-created-to-stopped RBAC: access denied], BadRequestDetail: 
2025-04-16T14:37:27.0767979Z   
2025-04-16T14:37:27.0798417Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-04-16T14:37:27.0798791Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T14:37:27.0798886Z         
2025-04-16T14:37:27.0799054Z         Error: error deleting resource
2025-04-16T14:37:27.0799149Z         
2025-04-16T14:37:27.0800049Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67ffbd1751a0bf7e37921337/streams/test-acc-tf-3192611342344900936--CREATED-STOPPED/connections/sample_stream_solar
2025-04-16T14:37:27.0800392Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T14:37:27.0800712Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T14:37:27.0800856Z         BadRequestDetail: 
2025-04-16T14:37:27.0806513Z    test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-04-16T14:37:27.0810234Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped (1.64s)
```
### 2025-04-17
#### FAIL a second
```
2025-04-17T00:44:44.9720184Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-04-17T00:44:44.9720592Z     resource_test.go:250: Testing: Verifies a processor cannot transition from CREATED to STOPPED state
2025-04-17T00:44:44.9722974Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-04-17T00:44:44.9742251Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-04-17T00:44:44.9742544Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-04-17T00:44:44.9742636Z         
2025-04-17T00:44:44.9742818Z         Error: error creating resource
2025-04-17T00:44:44.9742912Z         
2025-04-17T00:44:44.9743179Z           with mongodbatlas_stream_processor.processor,
2025-04-17T00:44:44.9743681Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-17T00:44:44.9744005Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-17T00:44:44.9744094Z         
2025-04-17T00:44:44.9744860Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68004acb5feb172e558c5f56/streams/test-acc-tf-7692767715950892517--CREATED-STOPPED/processor
2025-04-17T00:44:44.9745211Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-17T00:44:44.9745605Z         Detail: Streams Processor with this name (processor-created-to-stopped) had a
2025-04-17T00:44:44.9746026Z         problem occur: RBAC: access denied. Reason: Bad Request. Params:
2025-04-17T00:44:44.9746388Z         [processor-created-to-stopped RBAC: access denied], BadRequestDetail: 
2025-04-17T00:44:44.9753340Z    test_step_number=1 test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-04-17T00:44:44.9780554Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-04-17T00:44:44.9780934Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-17T00:44:44.9781036Z         
2025-04-17T00:44:44.9781219Z         Error: error deleting resource
2025-04-17T00:44:44.9781312Z         
2025-04-17T00:44:44.9782198Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68004acb5feb172e558c5f56/streams/test-acc-tf-7692767715950892517--CREATED-STOPPED/connections/sample_stream_solar
2025-04-17T00:44:44.9782540Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-17T00:44:44.9782873Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-17T00:44:44.9783016Z         BadRequestDetail: 
2025-04-17T00:44:44.9784342Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped (1.06s)
```
### 2025-04-18
#### PASS 8 seconds
### 2025-04-19
#### PASS 7 seconds
### 2025-04-20
#### FAIL 4 seconds
```
2025-04-20T00:49:07.0154490Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-04-20T00:49:07.0155274Z     resource_test.go:250: Testing: Verifies a processor cannot transition from CREATED to STOPPED state
2025-04-20T00:49:07.0177700Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-04-20T00:49:07.0201655Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-04-20T00:49:07.0202266Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-04-20T00:49:07.0202912Z         
2025-04-20T00:49:07.0203201Z         Error: error creating resource
2025-04-20T00:49:07.0203472Z         
2025-04-20T00:49:07.0203847Z           with mongodbatlas_stream_processor.processor,
2025-04-20T00:49:07.0204543Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-20T00:49:07.0205200Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-20T00:49:07.0205527Z         
2025-04-20T00:49:07.0206383Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68043fe0e9e1f62c2da38572/streams/test-acc-tf-5254101458275679572--CREATED-STOPPED/processor
2025-04-20T00:49:07.0207273Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-20T00:49:07.0207934Z         Detail: Streams Processor with this name (processor-created-to-stopped) had a
2025-04-20T00:49:07.0208768Z         problem occur: failed to acquire resources for stream processor validation:
2025-04-20T00:49:07.0209433Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-04-20T00:49:07.0210074Z         [processor-created-to-stopped failed to acquire resources for stream
2025-04-20T00:49:07.0210707Z         processor validation: global resource manager returned no resources],
2025-04-20T00:49:07.0211137Z         BadRequestDetail: 
2025-04-20T00:49:07.0234462Z   
2025-04-20T00:49:07.0235341Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-20T00:49:07.0236127Z         
2025-04-20T00:49:07.0236639Z         Error: error deleting resource
2025-04-20T00:49:07.0237127Z         
2025-04-20T00:49:07.0238968Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68043fe0e9e1f62c2da38572/streams/test-acc-tf-5254101458275679572--CREATED-STOPPED/connections/sample_stream_solar
2025-04-20T00:49:07.0240513Z         DELETE: HTTP 403 Forbidden (Error code:
2025-04-20T00:49:07.0241514Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-04-20T00:49:07.0242929Z         name test-acc-tf-5254101458275679572--CREATED-STOPPED has active processors,
2025-04-20T00:49:07.0243961Z         and cannot be changed. Reason: Forbidden. Params:
2025-04-20T00:49:07.0245010Z         [test-acc-tf-5254101458275679572--CREATED-STOPPED], BadRequestDetail: 
2025-04-20T00:49:07.0275297Z    test_terraform_path=/home/runner/work/_temp/f6644676-60c6-4c8e-8ae1-a78469633d36/terraform
2025-04-20T00:49:07.0417507Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped (4.81s)
```
### 2025-04-21
#### PASS 8 seconds
### 2025-04-22
#### PASS 8 seconds
### 2025-04-23
#### PASS 7 seconds
### 2025-04-24
#### FAIL 5 seconds
```
2025-04-24T00:43:21.1465295Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-04-24T00:43:21.1465994Z     resource_test.go:250: Testing: Verifies a processor cannot transition from CREATED to STOPPED state
2025-04-24T00:43:21.1470884Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-04-24T00:43:21.1488918Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-04-24T00:43:21.1489501Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-04-24T00:43:21.1489853Z         
2025-04-24T00:43:21.1490123Z         Error: error creating resource
2025-04-24T00:43:21.1490388Z         
2025-04-24T00:43:21.1490739Z           with mongodbatlas_stream_processor.processor,
2025-04-24T00:43:21.1491424Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-24T00:43:21.1492189Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-24T00:43:21.1492599Z         
2025-04-24T00:43:21.1493560Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68098564f1b81907e7097fd5/streams/test-acc-tf-4026475449579794563--CREATED-STOPPED/processor
2025-04-24T00:43:21.1494446Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-24T00:43:21.1495115Z         Detail: Streams Processor with this name (processor-created-to-stopped) had a
2025-04-24T00:43:21.1495770Z         problem occur: failed to acquire resources for stream processor validation:
2025-04-24T00:43:21.1496408Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-04-24T00:43:21.1497041Z         [processor-created-to-stopped failed to acquire resources for stream
2025-04-24T00:43:21.1497674Z         processor validation: global resource manager returned no resources],
2025-04-24T00:43:21.1498097Z         BadRequestDetail: 
2025-04-24T00:43:21.1514790Z   
2025-04-24T00:43:21.1564313Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-04-24T00:43:21.1565023Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-24T00:43:21.1565451Z         
2025-04-24T00:43:21.1565869Z         Error: error deleting resource
2025-04-24T00:43:21.1566142Z         
2025-04-24T00:43:21.1567107Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68098564f1b81907e7097fd5/streams/test-acc-tf-4026475449579794563--CREATED-STOPPED/connections/sample_stream_solar
2025-04-24T00:43:21.1567935Z         DELETE: HTTP 403 Forbidden (Error code:
2025-04-24T00:43:21.1568468Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-04-24T00:43:21.1569117Z         name test-acc-tf-4026475449579794563--CREATED-STOPPED has active processors,
2025-04-24T00:43:21.1569652Z         and cannot be changed. Reason: Forbidden. Params:
2025-04-24T00:43:21.1570194Z         [test-acc-tf-4026475449579794563--CREATED-STOPPED], BadRequestDetail: 
2025-04-24T00:43:21.1583899Z   
2025-04-24T00:43:21.1611699Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped (5.42s)
```
### 2025-04-25
#### FAIL 4 seconds
```
2025-04-25T00:44:59.2533599Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-04-25T00:44:59.2534442Z     resource_test.go:250: Testing: Verifies a processor cannot transition from CREATED to STOPPED state
2025-04-25T00:44:59.2539516Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-04-25T00:44:59.2604269Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-04-25T00:44:59.2604873Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-04-25T00:44:59.2605238Z         
2025-04-25T00:44:59.2605530Z         Error: error creating resource
2025-04-25T00:44:59.2605927Z         
2025-04-25T00:44:59.2606310Z           with mongodbatlas_stream_processor.processor,
2025-04-25T00:44:59.2607010Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-25T00:44:59.2607656Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-25T00:44:59.2608120Z         
2025-04-25T00:44:59.2608974Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/680ad7124656875332b381fe/streams/test-acc-tf-6232468780345754672--CREATED-STOPPED/processor
2025-04-25T00:44:59.2609863Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-25T00:44:59.2610530Z         Detail: Streams Processor with this name (processor-created-to-stopped) had a
2025-04-25T00:44:59.2611201Z         problem occur: failed to acquire resources for stream processor validation:
2025-04-25T00:44:59.2611859Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-04-25T00:44:59.2612500Z         [processor-created-to-stopped failed to acquire resources for stream
2025-04-25T00:44:59.2613129Z         processor validation: global resource manager returned no resources],
2025-04-25T00:44:59.2613564Z         BadRequestDetail: 
2025-04-25T00:44:59.2630370Z   
2025-04-25T00:44:59.2653750Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-04-25T00:44:59.2654444Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-25T00:44:59.2654885Z         
2025-04-25T00:44:59.2655170Z         Error: error deleting resource
2025-04-25T00:44:59.2655444Z         
2025-04-25T00:44:59.2656687Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/680ad7124656875332b381fe/streams/test-acc-tf-6232468780345754672--CREATED-STOPPED/connections/sample_stream_solar
2025-04-25T00:44:59.2657693Z         DELETE: HTTP 403 Forbidden (Error code:
2025-04-25T00:44:59.2658253Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-04-25T00:44:59.2658922Z         name test-acc-tf-6232468780345754672--CREATED-STOPPED has active processors,
2025-04-25T00:44:59.2659490Z         and cannot be changed. Reason: Forbidden. Params:
2025-04-25T00:44:59.2660058Z         [test-acc-tf-6232468780345754672--CREATED-STOPPED], BadRequestDetail: 
2025-04-25T00:44:59.2673127Z    test_terraform_path=/home/runner/work/_temp/97b16c68-53af-415f-bd2a-579359186db8/terraform test_working_directory=/tmp/plugintest3470060617
2025-04-25T00:44:59.2682083Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped (4.46s)
```
### 2025-04-26
#### FAIL 5 seconds
```
2025-04-26T00:45:05.5696240Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-04-26T00:45:05.5697109Z     resource_test.go:250: Testing: Verifies a processor cannot transition from CREATED to STOPPED state
2025-04-26T00:45:05.5702900Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-04-26T00:45:05.5724003Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-04-26T00:45:05.5724617Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-04-26T00:45:05.5725077Z         
2025-04-26T00:45:05.5725364Z         Error: error creating resource
2025-04-26T00:45:05.5725719Z         
2025-04-26T00:45:05.5726085Z           with mongodbatlas_stream_processor.processor,
2025-04-26T00:45:05.5727204Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-26T00:45:05.5728296Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-26T00:45:05.5728672Z         
2025-04-26T00:45:05.5729628Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/680c286e6f7a760e767795ac/streams/test-acc-tf-4627674796968330224--CREATED-STOPPED/processor
2025-04-26T00:45:05.5730832Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-26T00:45:05.5731612Z         Detail: Streams Processor with this name (processor-created-to-stopped) had a
2025-04-26T00:45:05.5732373Z         problem occur: failed to acquire resources for stream processor validation:
2025-04-26T00:45:05.5733076Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-04-26T00:45:05.5733762Z         [processor-created-to-stopped failed to acquire resources for stream
2025-04-26T00:45:05.5734488Z         processor validation: global resource manager returned no resources],
2025-04-26T00:45:05.5735007Z         BadRequestDetail: 
2025-04-26T00:45:05.5753154Z    test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated test_terraform_path=/home/runner/work/_temp/9b7bd28b-f6aa-4537-95a7-e9c25915b1b3/terraform test_working_directory=/tmp/plugintest3428594118
2025-04-26T00:45:05.5777614Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-04-26T00:45:05.5778310Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-26T00:45:05.5778750Z         
2025-04-26T00:45:05.5779020Z         Error: error deleting resource
2025-04-26T00:45:05.5779287Z         
2025-04-26T00:45:05.5780347Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/680c286e6f7a760e767795ac/streams/test-acc-tf-4627674796968330224--CREATED-STOPPED/connections/sample_stream_solar
2025-04-26T00:45:05.5781202Z         DELETE: HTTP 403 Forbidden (Error code:
2025-04-26T00:45:05.5781740Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-04-26T00:45:05.5782385Z         name test-acc-tf-4627674796968330224--CREATED-STOPPED has active processors,
2025-04-26T00:45:05.5783048Z         and cannot be changed. Reason: Forbidden. Params:
2025-04-26T00:45:05.5783600Z         [test-acc-tf-4627674796968330224--CREATED-STOPPED], BadRequestDetail: 
2025-04-26T00:45:05.5797447Z   
2025-04-26T00:45:05.5851182Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped (5.06s)
```
### 2025-04-27
#### FAIL 4 seconds
```
2025-04-27T00:47:25.4659582Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-04-27T00:47:25.4660293Z     resource_test.go:250: Testing: Verifies a processor cannot transition from CREATED to STOPPED state
2025-04-27T00:47:25.4665245Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-04-27T00:47:25.4683473Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-04-27T00:47:25.4684070Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-04-27T00:47:25.4684437Z         
2025-04-27T00:47:25.4684720Z         Error: error creating resource
2025-04-27T00:47:25.4684992Z         
2025-04-27T00:47:25.4685352Z           with mongodbatlas_stream_processor.processor,
2025-04-27T00:47:25.4686046Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-27T00:47:25.4686688Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-27T00:47:25.4687016Z         
2025-04-27T00:47:25.4687867Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/680d7a6ff71e7361cf7450a7/streams/test-acc-tf-8250914505658319311--CREATED-STOPPED/processor
2025-04-27T00:47:25.4689007Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-27T00:47:25.4689662Z         Detail: Streams Processor with this name (processor-created-to-stopped) had a
2025-04-27T00:47:25.4690325Z         problem occur: failed to acquire resources for stream processor validation:
2025-04-27T00:47:25.4690969Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-04-27T00:47:25.4691599Z         [processor-created-to-stopped failed to acquire resources for stream
2025-04-27T00:47:25.4692221Z         processor validation: global resource manager returned no resources],
2025-04-27T00:47:25.4692651Z         BadRequestDetail: 
2025-04-27T00:47:25.4705540Z    test_terraform_path=/home/runner/work/_temp/a66f83f8-c7ea-48d2-abd1-f97810bc2ede/terraform
2025-04-27T00:47:25.4706246Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-27T00:47:25.4706695Z         
2025-04-27T00:47:25.4706969Z         Error: error deleting resource
2025-04-27T00:47:25.4707241Z         
2025-04-27T00:47:25.4708307Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/680d7a6ff71e7361cf7450a7/streams/test-acc-tf-8250914505658319311--CREATED-STOPPED/connections/sample_stream_solar
2025-04-27T00:47:25.4709141Z         DELETE: HTTP 403 Forbidden (Error code:
2025-04-27T00:47:25.4709680Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-04-27T00:47:25.4710358Z         name test-acc-tf-8250914505658319311--CREATED-STOPPED has active processors,
2025-04-27T00:47:25.4710903Z         and cannot be changed. Reason: Forbidden. Params:
2025-04-27T00:47:25.4711460Z         [test-acc-tf-8250914505658319311--CREATED-STOPPED], BadRequestDetail: 
2025-04-27T00:47:25.4727555Z    test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated test_terraform_path=/home/runner/work/_temp/a66f83f8-c7ea-48d2-abd1-f97810bc2ede/terraform
2025-04-27T00:47:25.4812296Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped (4.16s)
```
### 2025-04-28
#### FAIL 3 seconds
```
2025-04-28T00:45:17.1658309Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-04-28T00:45:17.1659577Z     resource_test.go:250: Testing: Verifies a processor cannot transition from CREATED to STOPPED state
2025-04-28T00:45:17.1668436Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-04-28T00:45:17.1782694Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-04-28T00:45:17.1783930Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-04-28T00:45:17.1784561Z         
2025-04-28T00:45:17.1785058Z         Error: error creating resource
2025-04-28T00:45:17.1785525Z         
2025-04-28T00:45:17.1786152Z           with mongodbatlas_stream_processor.processor,
2025-04-28T00:45:17.1787407Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-28T00:45:17.1788546Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-28T00:45:17.1789121Z         
2025-04-28T00:45:17.1790681Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/680ecbcb1ad7050ec5b1f1a8/streams/test-acc-tf-7794305454962942696--CREATED-STOPPED/processor
2025-04-28T00:45:17.1792279Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-28T00:45:17.1793633Z         Detail: Streams Processor with this name (processor-created-to-stopped) had a
2025-04-28T00:45:17.1794842Z         problem occur: failed to acquire resources for stream processor validation:
2025-04-28T00:45:17.1796017Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-04-28T00:45:17.1797145Z         [processor-created-to-stopped failed to acquire resources for stream
2025-04-28T00:45:17.1798239Z         processor validation: global resource manager returned no resources],
2025-04-28T00:45:17.1798982Z         BadRequestDetail: 
2025-04-28T00:45:17.1822946Z   
2025-04-28T00:45:17.1823980Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-28T00:45:17.1824740Z         
2025-04-28T00:45:17.1825281Z         Error: error deleting resource
2025-04-28T00:45:17.1825760Z         
2025-04-28T00:45:17.1827514Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/680ecbcb1ad7050ec5b1f1a8/streams/test-acc-tf-7794305454962942696--CREATED-STOPPED/connections/sample_stream_solar
2025-04-28T00:45:17.1829039Z         DELETE: HTTP 403 Forbidden (Error code:
2025-04-28T00:45:17.1830018Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-04-28T00:45:17.1831193Z         name test-acc-tf-7794305454962942696--CREATED-STOPPED has active processors,
2025-04-28T00:45:17.1832167Z         and cannot be changed. Reason: Forbidden. Params:
2025-04-28T00:45:17.1833151Z         [test-acc-tf-7794305454962942696--CREATED-STOPPED], BadRequestDetail: 
2025-04-28T00:45:17.1862388Z    test_terraform_path=/home/runner/work/_temp/c6c4c4bc-e0ba-48d7-8946-01b0db157b58/terraform
2025-04-28T00:45:17.1909142Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped (3.17s)
```
### 2025-04-29
#### PASS 4 seconds
### 2025-04-30
#### PASS 6 seconds
#### FAIL 3 seconds
```
2025-04-30T09:23:01.8456219Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-04-30T09:23:01.8457058Z     resource_test.go:250: Testing: Verifies a processor cannot transition from CREATED to STOPPED state
2025-04-30T09:23:01.8461826Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-04-30T09:23:01.8479828Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-04-30T09:23:01.8480408Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-04-30T09:23:01.8480769Z         
2025-04-30T09:23:01.8481037Z         Error: error creating resource
2025-04-30T09:23:01.8481303Z         
2025-04-30T09:23:01.8481652Z           with mongodbatlas_stream_processor.processor,
2025-04-30T09:23:01.8482334Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-30T09:23:01.8482979Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-30T09:23:01.8483403Z         
2025-04-30T09:23:01.8484240Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6811e79687449e5deb011ac5/streams/test-acc-tf-2909087792718561431--CREATED-STOPPED/processor
2025-04-30T09:23:01.8485113Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-30T09:23:01.8485764Z         Detail: Streams Processor with this name (processor-created-to-stopped) had a
2025-04-30T09:23:01.8486425Z         problem occur: failed to acquire resources for stream processor validation:
2025-04-30T09:23:01.8487062Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-04-30T09:23:01.8487692Z         [processor-created-to-stopped failed to acquire resources for stream
2025-04-30T09:23:01.8488308Z         processor validation: global resource manager returned no resources],
2025-04-30T09:23:01.8488725Z         BadRequestDetail: 
2025-04-30T09:23:01.8501959Z   
2025-04-30T09:23:01.8502419Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-30T09:23:01.8502848Z         
2025-04-30T09:23:01.8503221Z         Error: error deleting resource
2025-04-30T09:23:01.8503621Z         
2025-04-30T09:23:01.8504581Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6811e79687449e5deb011ac5/streams/test-acc-tf-2909087792718561431--CREATED-STOPPED/connections/sample_stream_solar
2025-04-30T09:23:01.8505396Z         DELETE: HTTP 403 Forbidden (Error code:
2025-04-30T09:23:01.8505925Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-04-30T09:23:01.8506569Z         name test-acc-tf-2909087792718561431--CREATED-STOPPED has active processors,
2025-04-30T09:23:01.8507101Z         and cannot be changed. Reason: Forbidden. Params:
2025-04-30T09:23:01.8507653Z         [test-acc-tf-2909087792718561431--CREATED-STOPPED], BadRequestDetail: 
2025-04-30T09:23:01.8523722Z    test_working_directory=/tmp/plugintest1474646412 test_terraform_path=/home/runner/work/_temp/e9d9e2d7-1093-496a-b712-8e78e21daf85/terraform test_step_number=1
2025-04-30T09:23:01.8620231Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped (3.87s)
```
### 2025-05-01
#### PASS 5 seconds
#### FAIL 4 seconds
```
2025-05-01T02:17:05.8581572Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-05-01T02:17:05.8582295Z     resource_test.go:250: Testing: Verifies a processor cannot transition from CREATED to STOPPED state
2025-05-01T02:17:05.8587433Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-05-01T02:17:05.8701256Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-05-01T02:17:05.8701881Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-05-01T02:17:05.8702270Z         
2025-05-01T02:17:05.8702569Z         Error: error creating resource
2025-05-01T02:17:05.8702865Z         
2025-05-01T02:17:05.8703248Z           with mongodbatlas_stream_processor.processor,
2025-05-01T02:17:05.8703969Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-05-01T02:17:05.8704629Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-05-01T02:17:05.8704981Z         
2025-05-01T02:17:05.8705850Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6812d5a0c53aa6122b25a1de/streams/test-acc-tf-4108096265295603536--CREATED-STOPPED/processor
2025-05-01T02:17:05.8706755Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-05-01T02:17:05.8707441Z         Detail: Streams Processor with this name (processor-created-to-stopped) had a
2025-05-01T02:17:05.8708131Z         problem occur: failed to acquire resources for stream processor validation:
2025-05-01T02:17:05.8709424Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-05-01T02:17:05.8710111Z         [processor-created-to-stopped failed to acquire resources for stream
2025-05-01T02:17:05.8710755Z         processor validation: global resource manager returned no resources],
2025-05-01T02:17:05.8711206Z         BadRequestDetail: 
2025-05-01T02:17:05.8724624Z    test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped test_terraform_path=/home/runner/work/_temp/eaead056-25d5-4d1e-98a4-b63773199695/terraform
2025-05-01T02:17:05.8725653Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-01T02:17:05.8726117Z         
2025-05-01T02:17:05.8726421Z         Error: error deleting resource
2025-05-01T02:17:05.8726726Z         
2025-05-01T02:17:05.8727713Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6812d5a0c53aa6122b25a1de/streams/test-acc-tf-4108096265295603536--CREATED-STOPPED/connections/sample_stream_solar
2025-05-01T02:17:05.8728575Z         DELETE: HTTP 403 Forbidden (Error code:
2025-05-01T02:17:05.8729397Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-05-01T02:17:05.8730073Z         name test-acc-tf-4108096265295603536--CREATED-STOPPED has active processors,
2025-05-01T02:17:05.8730655Z         and cannot be changed. Reason: Forbidden. Params:
2025-05-01T02:17:05.8731236Z         [test-acc-tf-4108096265295603536--CREATED-STOPPED], BadRequestDetail: 
2025-05-01T02:17:05.8733888Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped (4.94s)
```
#### FAIL 4 seconds
```
2025-05-01T03:43:57.6073595Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-05-01T03:43:57.6074302Z     resource_test.go:250: Testing: Verifies a processor cannot transition from CREATED to STOPPED state
2025-05-01T03:43:57.6079557Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-05-01T03:43:57.6129020Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-05-01T03:43:57.6129710Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-05-01T03:43:57.6130089Z         
2025-05-01T03:43:57.6130454Z         Error: error creating resource
2025-05-01T03:43:57.6130723Z         
2025-05-01T03:43:57.6131177Z           with mongodbatlas_stream_processor.processor,
2025-05-01T03:43:57.6131954Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-05-01T03:43:57.6132688Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-05-01T03:43:57.6133020Z         
2025-05-01T03:43:57.6134169Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6812ea1ded10397068f81235/streams/test-acc-tf-928001802124824035--CREATED-STOPPED/processor
2025-05-01T03:43:57.6135387Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-05-01T03:43:57.6136128Z         Detail: Streams Processor with this name (processor-created-to-stopped) had a
2025-05-01T03:43:57.6136902Z         problem occur: failed to acquire resources for stream processor validation:
2025-05-01T03:43:57.6137644Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-05-01T03:43:57.6138392Z         [processor-created-to-stopped failed to acquire resources for stream
2025-05-01T03:43:57.6139114Z         processor validation: global resource manager returned no resources],
2025-05-01T03:43:57.6139626Z         BadRequestDetail: 
2025-05-01T03:43:57.6154956Z   
2025-05-01T03:43:57.6175878Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-05-01T03:43:57.6176561Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-01T03:43:57.6176995Z         
2025-05-01T03:43:57.6177268Z         Error: error deleting resource
2025-05-01T03:43:57.6177537Z         
2025-05-01T03:43:57.6178498Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6812ea1ded10397068f81235/streams/test-acc-tf-928001802124824035--CREATED-STOPPED/connections/sample_stream_solar
2025-05-01T03:43:57.6179323Z         DELETE: HTTP 403 Forbidden (Error code:
2025-05-01T03:43:57.6179980Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-05-01T03:43:57.6180634Z         name test-acc-tf-928001802124824035--CREATED-STOPPED has active processors,
2025-05-01T03:43:57.6181179Z         and cannot be changed. Reason: Forbidden. Params:
2025-05-01T03:43:57.6181725Z         [test-acc-tf-928001802124824035--CREATED-STOPPED], BadRequestDetail: 
2025-05-01T03:43:57.6186527Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped (4.40s)
```
#### FAIL 4 seconds
```
2025-05-01T05:07:13.2477745Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-05-01T05:07:13.2478448Z     resource_test.go:250: Testing: Verifies a processor cannot transition from CREATED to STOPPED state
2025-05-01T05:07:13.2483704Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-05-01T05:07:13.2593408Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-05-01T05:07:13.2594000Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-05-01T05:07:13.2594371Z         
2025-05-01T05:07:13.2594651Z         Error: error creating resource
2025-05-01T05:07:13.2594921Z         
2025-05-01T05:07:13.2595280Z           with mongodbatlas_stream_processor.processor,
2025-05-01T05:07:13.2595967Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-05-01T05:07:13.2596608Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-05-01T05:07:13.2596940Z         
2025-05-01T05:07:13.2597783Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6812fdf713d6b32170fea898/streams/test-acc-tf-1414033975045535768--CREATED-STOPPED/processor
2025-05-01T05:07:13.2598672Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-05-01T05:07:13.2599325Z         Detail: Streams Processor with this name (processor-created-to-stopped) had a
2025-05-01T05:07:13.2599993Z         problem occur: failed to acquire resources for stream processor validation:
2025-05-01T05:07:13.2600636Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-05-01T05:07:13.2601549Z         [processor-created-to-stopped failed to acquire resources for stream
2025-05-01T05:07:13.2602321Z         processor validation: global resource manager returned no resources],
2025-05-01T05:07:13.2602755Z         BadRequestDetail: 
2025-05-01T05:07:13.2615308Z    test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped test_terraform_path=/home/runner/work/_temp/91c6d534-57a1-49f2-9165-273c0ef0b50d/terraform test_working_directory=/tmp/plugintest1790445626 test_step_number=1
2025-05-01T05:07:13.2616545Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-01T05:07:13.2616989Z         
2025-05-01T05:07:13.2617280Z         Error: error deleting resource
2025-05-01T05:07:13.2617554Z         
2025-05-01T05:07:13.2618521Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6812fdf713d6b32170fea898/streams/test-acc-tf-1414033975045535768--CREATED-STOPPED/connections/sample_stream_solar
2025-05-01T05:07:13.2619363Z         DELETE: HTTP 403 Forbidden (Error code:
2025-05-01T05:07:13.2619899Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-05-01T05:07:13.2620559Z         name test-acc-tf-1414033975045535768--CREATED-STOPPED has active processors,
2025-05-01T05:07:13.2621214Z         and cannot be changed. Reason: Forbidden. Params:
2025-05-01T05:07:13.2621772Z         [test-acc-tf-1414033975045535768--CREATED-STOPPED], BadRequestDetail: 
2025-05-01T05:07:13.2624334Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped (4.55s)
```
#### FAIL 4 seconds
```
2025-05-01T06:33:58.4468355Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-05-01T06:33:58.4469047Z     resource_test.go:250: Testing: Verifies a processor cannot transition from CREATED to STOPPED state
2025-05-01T06:33:58.4474157Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-05-01T06:33:58.4492266Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-05-01T06:33:58.4492847Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-05-01T06:33:58.4493204Z         
2025-05-01T06:33:58.4493482Z         Error: error creating resource
2025-05-01T06:33:58.4493751Z         
2025-05-01T06:33:58.4494101Z           with mongodbatlas_stream_processor.processor,
2025-05-01T06:33:58.4494892Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-05-01T06:33:58.4495532Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-05-01T06:33:58.4495852Z         
2025-05-01T06:33:58.4496684Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6813128813d6b32170ff097d/streams/test-acc-tf-2818385140215973874--CREATED-STOPPED/processor
2025-05-01T06:33:58.4497555Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-05-01T06:33:58.4498202Z         Detail: Streams Processor with this name (processor-created-to-stopped) had a
2025-05-01T06:33:58.4498855Z         problem occur: failed to acquire resources for stream processor validation:
2025-05-01T06:33:58.4499486Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-05-01T06:33:58.4500112Z         [processor-created-to-stopped failed to acquire resources for stream
2025-05-01T06:33:58.4500955Z         processor validation: global resource manager returned no resources],
2025-05-01T06:33:58.4501409Z         BadRequestDetail: 
2025-05-01T06:33:58.4514485Z   
2025-05-01T06:33:58.4515015Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-01T06:33:58.4515447Z         
2025-05-01T06:33:58.4515718Z         Error: error deleting resource
2025-05-01T06:33:58.4515979Z         
2025-05-01T06:33:58.4516934Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6813128813d6b32170ff097d/streams/test-acc-tf-2818385140215973874--CREATED-STOPPED/connections/sample_stream_solar
2025-05-01T06:33:58.4517752Z         DELETE: HTTP 403 Forbidden (Error code:
2025-05-01T06:33:58.4518284Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-05-01T06:33:58.4519048Z         name test-acc-tf-2818385140215973874--CREATED-STOPPED has active processors,
2025-05-01T06:33:58.4519595Z         and cannot be changed. Reason: Forbidden. Params:
2025-05-01T06:33:58.4520143Z         [test-acc-tf-2818385140215973874--CREATED-STOPPED], BadRequestDetail: 
2025-05-01T06:33:58.4536791Z   
2025-05-01T06:33:58.4568955Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped (4.16s)
```
#### FAIL 4 seconds
```
2025-05-01T08:00:42.5371454Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-05-01T08:00:42.5372346Z     resource_test.go:250: Testing: Verifies a processor cannot transition from CREATED to STOPPED state
2025-05-01T08:00:42.5377363Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-05-01T08:00:42.5489486Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-05-01T08:00:42.5490093Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-05-01T08:00:42.5490462Z         
2025-05-01T08:00:42.5490758Z         Error: error creating resource
2025-05-01T08:00:42.5491036Z         
2025-05-01T08:00:42.5491403Z           with mongodbatlas_stream_processor.processor,
2025-05-01T08:00:42.5492334Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-05-01T08:00:42.5492992Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-05-01T08:00:42.5493335Z         
2025-05-01T08:00:42.5494173Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68132633f7db2d257067890c/streams/test-acc-tf-63834887079474202--CREATED-STOPPED/processor
2025-05-01T08:00:42.5495054Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-05-01T08:00:42.5495723Z         Detail: Streams Processor with this name (processor-created-to-stopped) had a
2025-05-01T08:00:42.5496396Z         problem occur: failed to acquire resources for stream processor validation:
2025-05-01T08:00:42.5497177Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-05-01T08:00:42.5497831Z         [processor-created-to-stopped failed to acquire resources for stream
2025-05-01T08:00:42.5498457Z         processor validation: global resource manager returned no resources],
2025-05-01T08:00:42.5498901Z         BadRequestDetail: 
2025-05-01T08:00:42.5512303Z    test_terraform_path=/home/runner/work/_temp/9c737af5-02ca-48a0-8b01-3b29572d16bb/terraform test_working_directory=/tmp/plugintest1103831817 test_step_number=1
2025-05-01T08:00:42.5513254Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-01T08:00:42.5513694Z         
2025-05-01T08:00:42.5513981Z         Error: error deleting resource
2025-05-01T08:00:42.5514264Z         
2025-05-01T08:00:42.5515225Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68132633f7db2d257067890c/streams/test-acc-tf-63834887079474202--CREATED-STOPPED/connections/sample_stream_solar
2025-05-01T08:00:42.5516058Z         DELETE: HTTP 403 Forbidden (Error code:
2025-05-01T08:00:42.5516605Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-05-01T08:00:42.5517254Z         name test-acc-tf-63834887079474202--CREATED-STOPPED has active processors,
2025-05-01T08:00:42.5517810Z         and cannot be changed. Reason: Forbidden. Params:
2025-05-01T08:00:42.5518363Z         [test-acc-tf-63834887079474202--CREATED-STOPPED], BadRequestDetail: 
2025-05-01T08:00:42.5520929Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped (4.94s)
```
#### FAIL 4 seconds
```
2025-05-01T09:23:38.6519689Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-05-01T09:23:38.6520483Z     resource_test.go:250: Testing: Verifies a processor cannot transition from CREATED to STOPPED state
2025-05-01T09:23:38.6525236Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-05-01T09:23:38.6587811Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-05-01T09:23:38.6588399Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-05-01T09:23:38.6588749Z         
2025-05-01T09:23:38.6589021Z         Error: error creating resource
2025-05-01T09:23:38.6589281Z         
2025-05-01T09:23:38.6589631Z           with mongodbatlas_stream_processor.processor,
2025-05-01T09:23:38.6590451Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-05-01T09:23:38.6591076Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-05-01T09:23:38.6591398Z         
2025-05-01T09:23:38.6592232Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68133a0d13d6b32170ffaf6b/streams/test-acc-tf-2956230122519663305--CREATED-STOPPED/processor
2025-05-01T09:23:38.6593101Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-05-01T09:23:38.6593747Z         Detail: Streams Processor with this name (processor-created-to-stopped) had a
2025-05-01T09:23:38.6594399Z         problem occur: failed to acquire resources for stream processor validation:
2025-05-01T09:23:38.6595032Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-05-01T09:23:38.6595651Z         [processor-created-to-stopped failed to acquire resources for stream
2025-05-01T09:23:38.6596261Z         processor validation: global resource manager returned no resources],
2025-05-01T09:23:38.6596676Z         BadRequestDetail: 
2025-05-01T09:23:38.6609782Z   
2025-05-01T09:23:38.6610341Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-01T09:23:38.6610762Z         
2025-05-01T09:23:38.6611029Z         Error: error deleting resource
2025-05-01T09:23:38.6611294Z         
2025-05-01T09:23:38.6612245Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68133a0d13d6b32170ffaf6b/streams/test-acc-tf-2956230122519663305--CREATED-STOPPED/connections/sample_stream_solar
2025-05-01T09:23:38.6613074Z         DELETE: HTTP 403 Forbidden (Error code:
2025-05-01T09:23:38.6613597Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-05-01T09:23:38.6614238Z         name test-acc-tf-2956230122519663305--CREATED-STOPPED has active processors,
2025-05-01T09:23:38.6614777Z         and cannot be changed. Reason: Forbidden. Params:
2025-05-01T09:23:38.6615314Z         [test-acc-tf-2956230122519663305--CREATED-STOPPED], BadRequestDetail: 
2025-05-01T09:23:38.6619750Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped (4.26s)
```
### 2025-05-02
#### FAIL 3 seconds
```
2025-05-02T00:45:00.6570028Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-05-02T00:45:00.6570746Z     resource_test.go:250: Testing: Verifies a processor cannot transition from CREATED to STOPPED state
2025-05-02T00:45:00.6575833Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-05-02T00:45:00.6639453Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-05-02T00:45:00.6640051Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-05-02T00:45:00.6640424Z         
2025-05-02T00:45:00.6640716Z         Error: error creating resource
2025-05-02T00:45:00.6641001Z         
2025-05-02T00:45:00.6641375Z           with mongodbatlas_stream_processor.processor,
2025-05-02T00:45:00.6642077Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-05-02T00:45:00.6642853Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-05-02T00:45:00.6643190Z         
2025-05-02T00:45:00.6644046Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68141187555db3353e4cc5a7/streams/test-acc-tf-7303593696990299855--CREATED-STOPPED/processor
2025-05-02T00:45:00.6644937Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-05-02T00:45:00.6645596Z         Detail: Streams Processor with this name (processor-created-to-stopped) had a
2025-05-02T00:45:00.6646275Z         problem occur: failed to acquire resources for stream processor validation:
2025-05-02T00:45:00.6646928Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-05-02T00:45:00.6647572Z         [processor-created-to-stopped failed to acquire resources for stream
2025-05-02T00:45:00.6648315Z         processor validation: global resource manager returned no resources],
2025-05-02T00:45:00.6648750Z         BadRequestDetail: 
2025-05-02T00:45:00.6662065Z   
2025-05-02T00:45:00.6662680Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-02T00:45:00.6663124Z         
2025-05-02T00:45:00.6663412Z         Error: error deleting resource
2025-05-02T00:45:00.6663691Z         
2025-05-02T00:45:00.6664671Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68141187555db3353e4cc5a7/streams/test-acc-tf-7303593696990299855--CREATED-STOPPED/connections/sample_stream_solar
2025-05-02T00:45:00.6665509Z         DELETE: HTTP 403 Forbidden (Error code:
2025-05-02T00:45:00.6666059Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-05-02T00:45:00.6666721Z         name test-acc-tf-7303593696990299855--CREATED-STOPPED has active processors,
2025-05-02T00:45:00.6667279Z         and cannot be changed. Reason: Forbidden. Params:
2025-05-02T00:45:00.6667842Z         [test-acc-tf-7303593696990299855--CREATED-STOPPED], BadRequestDetail: 
2025-05-02T00:45:00.6684419Z    test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated test_working_directory=/tmp/plugintest3529128095
2025-05-02T00:45:00.6716115Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped (3.91s)
```
### 2025-05-03
#### FAIL 3 seconds
```
2025-05-03T00:44:49.1524702Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-05-03T00:44:49.1525420Z     resource_test.go:250: Testing: Verifies a processor cannot transition from CREATED to STOPPED state
2025-05-03T00:44:49.1530654Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-05-03T00:44:49.1549389Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-05-03T00:44:49.1549982Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-05-03T00:44:49.1550352Z         
2025-05-03T00:44:49.1550629Z         Error: error creating resource
2025-05-03T00:44:49.1551028Z         
2025-05-03T00:44:49.1551404Z           with mongodbatlas_stream_processor.processor,
2025-05-03T00:44:49.1552099Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-05-03T00:44:49.1552766Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-05-03T00:44:49.1553096Z         
2025-05-03T00:44:49.1553949Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/681562e9f5ab983d4a763d13/streams/test-acc-tf-8901016293551339878--CREATED-STOPPED/processor
2025-05-03T00:44:49.1554844Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-05-03T00:44:49.1555503Z         Detail: Streams Processor with this name (processor-created-to-stopped) had a
2025-05-03T00:44:49.1556177Z         problem occur: failed to acquire resources for stream processor validation:
2025-05-03T00:44:49.1556949Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-05-03T00:44:49.1557751Z         [processor-created-to-stopped failed to acquire resources for stream
2025-05-03T00:44:49.1558435Z         processor validation: global resource manager returned no resources],
2025-05-03T00:44:49.1558867Z         BadRequestDetail: 
2025-05-03T00:44:49.1572180Z   
2025-05-03T00:44:49.1572650Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-03T00:44:49.1573078Z         
2025-05-03T00:44:49.1573355Z         Error: error deleting resource
2025-05-03T00:44:49.1573616Z         
2025-05-03T00:44:49.1574599Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/681562e9f5ab983d4a763d13/streams/test-acc-tf-8901016293551339878--CREATED-STOPPED/connections/sample_stream_solar
2025-05-03T00:44:49.1575446Z         DELETE: HTTP 403 Forbidden (Error code:
2025-05-03T00:44:49.1575987Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-05-03T00:44:49.1576651Z         name test-acc-tf-8901016293551339878--CREATED-STOPPED has active processors,
2025-05-03T00:44:49.1577341Z         and cannot be changed. Reason: Forbidden. Params:
2025-05-03T00:44:49.1578091Z         [test-acc-tf-8901016293551339878--CREATED-STOPPED], BadRequestDetail: 
2025-05-03T00:44:49.1594840Z   
2025-05-03T00:44:49.1671234Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped (3.25s)
```
### 2025-05-04
#### FAIL 6 seconds
```
2025-05-04T00:47:22.2328601Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-05-04T00:47:22.2329309Z     resource_test.go:250: Testing: Verifies a processor cannot transition from CREATED to STOPPED state
2025-05-04T00:47:22.2334305Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-05-04T00:47:22.2410799Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-05-04T00:47:22.2411380Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-05-04T00:47:22.2411887Z         
2025-05-04T00:47:22.2412167Z         Error: error creating resource
2025-05-04T00:47:22.2412432Z         
2025-05-04T00:47:22.2412928Z           with mongodbatlas_stream_processor.processor,
2025-05-04T00:47:22.2413618Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-05-04T00:47:22.2414256Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-05-04T00:47:22.2414722Z         
2025-05-04T00:47:22.2415559Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6816b5455763026acc2882c0/streams/test-acc-tf-1717582540734935790--CREATED-STOPPED/processor
2025-05-04T00:47:22.2416440Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-05-04T00:47:22.2417092Z         Detail: Streams Processor with this name (processor-created-to-stopped) had a
2025-05-04T00:47:22.2417756Z         problem occur: failed to acquire resources for stream processor validation:
2025-05-04T00:47:22.2418405Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-05-04T00:47:22.2419035Z         [processor-created-to-stopped failed to acquire resources for stream
2025-05-04T00:47:22.2419662Z         processor validation: global resource manager returned no resources],
2025-05-04T00:47:22.2420082Z         BadRequestDetail: 
2025-05-04T00:47:22.2433737Z   
2025-05-04T00:47:22.2472965Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-05-04T00:47:22.2473646Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-04T00:47:22.2474072Z         
2025-05-04T00:47:22.2474350Z         Error: error deleting resource
2025-05-04T00:47:22.2474613Z         
2025-05-04T00:47:22.2475601Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6816b5455763026acc2882c0/streams/test-acc-tf-1717582540734935790--CREATED-STOPPED/connections/sample_stream_solar
2025-05-04T00:47:22.2476410Z         DELETE: HTTP 403 Forbidden (Error code:
2025-05-04T00:47:22.2476935Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-05-04T00:47:22.2477698Z         name test-acc-tf-1717582540734935790--CREATED-STOPPED has active processors,
2025-05-04T00:47:22.2478238Z         and cannot be changed. Reason: Forbidden. Params:
2025-05-04T00:47:22.2478802Z         [test-acc-tf-1717582540734935790--CREATED-STOPPED], BadRequestDetail: 
2025-05-04T00:47:22.2481313Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped (6.03s)
```
### 2025-05-05
#### FAIL 2 seconds
```
2025-05-05T00:44:15.7590817Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-05-05T00:44:15.7591716Z     resource_test.go:250: Testing: Verifies a processor cannot transition from CREATED to STOPPED state
2025-05-05T00:44:15.7596534Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-05-05T00:44:15.7615010Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-05-05T00:44:15.7615599Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-05-05T00:44:15.7615965Z         
2025-05-05T00:44:15.7616245Z         Error: error creating resource
2025-05-05T00:44:15.7616523Z         
2025-05-05T00:44:15.7616891Z           with mongodbatlas_stream_processor.processor,
2025-05-05T00:44:15.7617573Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-05-05T00:44:15.7618211Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-05-05T00:44:15.7618539Z         
2025-05-05T00:44:15.7619396Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6818067f815eb7429e02a9d7/streams/test-acc-tf-7222850436220607978--CREATED-STOPPED/processor
2025-05-05T00:44:15.7620296Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-05-05T00:44:15.7621114Z         Detail: Streams Processor with this name (processor-created-to-stopped) had a
2025-05-05T00:44:15.7621813Z         problem occur: failed to acquire resources for stream processor validation:
2025-05-05T00:44:15.7622457Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-05-05T00:44:15.7623099Z         [processor-created-to-stopped failed to acquire resources for stream
2025-05-05T00:44:15.7623730Z         processor validation: global resource manager returned no resources],
2025-05-05T00:44:15.7624182Z         BadRequestDetail: 
2025-05-05T00:44:15.7637483Z    test_working_directory=/tmp/plugintest1051271123
2025-05-05T00:44:15.7638053Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-05T00:44:15.7638482Z         
2025-05-05T00:44:15.7638762Z         Error: error deleting resource
2025-05-05T00:44:15.7639038Z         
2025-05-05T00:44:15.7640010Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6818067f815eb7429e02a9d7/streams/test-acc-tf-7222850436220607978--CREATED-STOPPED/connections/sample_stream_solar
2025-05-05T00:44:15.7640863Z         DELETE: HTTP 403 Forbidden (Error code:
2025-05-05T00:44:15.7641569Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-05-05T00:44:15.7642234Z         name test-acc-tf-7222850436220607978--CREATED-STOPPED has active processors,
2025-05-05T00:44:15.7642776Z         and cannot be changed. Reason: Forbidden. Params:
2025-05-05T00:44:15.7643333Z         [test-acc-tf-7222850436220607978--CREATED-STOPPED], BadRequestDetail: 
2025-05-05T00:44:15.7659290Z    test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated test_terraform_path=/home/runner/work/_temp/f4ca3d7f-04d2-457f-82a1-28d798808c42/terraform test_working_directory=/tmp/plugintest2602496020 test_step_number=1
2025-05-05T00:44:15.7736984Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped (2.56s)
```
#### FAIL 3 seconds
```
2025-05-05T10:43:53.8862813Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-05-05T10:43:53.8863677Z     resource_test.go:250: Testing: Verifies a processor cannot transition from CREATED to STOPPED state
2025-05-05T10:43:53.8869695Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-05-05T10:43:53.8891385Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-05-05T10:43:53.8892088Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-05-05T10:43:53.8892490Z         
2025-05-05T10:43:53.8892826Z         Error: error creating resource
2025-05-05T10:43:53.8893099Z         
2025-05-05T10:43:53.8893565Z           with mongodbatlas_stream_processor.processor,
2025-05-05T10:43:53.8894365Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-05-05T10:43:53.8895103Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-05-05T10:43:53.8895435Z         
2025-05-05T10:43:53.8896763Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/681892fac81731290de3bc4e/streams/test-acc-tf-2078085224907557299--CREATED-STOPPED/processor
2025-05-05T10:43:53.8897952Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-05-05T10:43:53.8898668Z         Detail: Streams Processor with this name (processor-created-to-stopped) had a
2025-05-05T10:43:53.8899619Z         problem occur: failed to acquire resources for stream processor validation:
2025-05-05T10:43:53.8900400Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-05-05T10:43:53.8901088Z         [processor-created-to-stopped failed to acquire resources for stream
2025-05-05T10:43:53.8901810Z         processor validation: global resource manager returned no resources],
2025-05-05T10:43:53.8902354Z         BadRequestDetail: 
2025-05-05T10:43:53.8917079Z   
2025-05-05T10:43:53.8917552Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-05T10:43:53.8917986Z         
2025-05-05T10:43:53.8918256Z         Error: error deleting resource
2025-05-05T10:43:53.8918527Z         
2025-05-05T10:43:53.8919643Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/681892fac81731290de3bc4e/streams/test-acc-tf-2078085224907557299--CREATED-STOPPED/connections/sample_stream_solar
2025-05-05T10:43:53.8920465Z         DELETE: HTTP 403 Forbidden (Error code:
2025-05-05T10:43:53.8921004Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-05-05T10:43:53.8921657Z         name test-acc-tf-2078085224907557299--CREATED-STOPPED has active processors,
2025-05-05T10:43:53.8922199Z         and cannot be changed. Reason: Forbidden. Params:
2025-05-05T10:43:53.8922747Z         [test-acc-tf-2078085224907557299--CREATED-STOPPED], BadRequestDetail: 
2025-05-05T10:43:53.8939505Z    test_working_directory=/tmp/plugintest2999397965
2025-05-05T10:43:53.9014265Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped (3.01s)
```
### 2025-05-06
#### FAIL 4 seconds
```
2025-05-06T00:45:47.9927981Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-05-06T00:45:47.9928744Z     resource_test.go:250: Testing: Verifies a processor cannot transition from CREATED to STOPPED state
2025-05-06T00:45:47.9933755Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-05-06T00:45:48.0001425Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-05-06T00:45:48.0002131Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-05-06T00:45:48.0002505Z         
2025-05-06T00:45:48.0002899Z         Error: error creating resource
2025-05-06T00:45:48.0003191Z         
2025-05-06T00:45:48.0003640Z           with mongodbatlas_stream_processor.processor,
2025-05-06T00:45:48.0004418Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-05-06T00:45:48.0005121Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-05-06T00:45:48.0005564Z         
2025-05-06T00:45:48.0006639Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/681957ac672b3b2681c56cbd/streams/test-acc-tf-7426479637653441251--CREATED-STOPPED/processor
2025-05-06T00:45:48.0007686Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-05-06T00:45:48.0008409Z         Detail: Streams Processor with this name (processor-created-to-stopped) had a
2025-05-06T00:45:48.0009198Z         problem occur: failed to acquire resources for stream processor validation:
2025-05-06T00:45:48.0009965Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-05-06T00:45:48.0010871Z         [processor-created-to-stopped failed to acquire resources for stream
2025-05-06T00:45:48.0011647Z         processor validation: global resource manager returned no resources],
2025-05-06T00:45:48.0012187Z         BadRequestDetail: 
2025-05-06T00:45:48.0027509Z   
2025-05-06T00:45:48.0027988Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-06T00:45:48.0028418Z         
2025-05-06T00:45:48.0028701Z         Error: error deleting resource
2025-05-06T00:45:48.0028970Z         
2025-05-06T00:45:48.0029937Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/681957ac672b3b2681c56cbd/streams/test-acc-tf-7426479637653441251--CREATED-STOPPED/connections/sample_stream_solar
2025-05-06T00:45:48.0030828Z         DELETE: HTTP 403 Forbidden (Error code:
2025-05-06T00:45:48.0031486Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-05-06T00:45:48.0032139Z         name test-acc-tf-7426479637653441251--CREATED-STOPPED has active processors,
2025-05-06T00:45:48.0032680Z         and cannot be changed. Reason: Forbidden. Params:
2025-05-06T00:45:48.0033236Z         [test-acc-tf-7426479637653441251--CREATED-STOPPED], BadRequestDetail: 
2025-05-06T00:45:48.0038029Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped (4.31s)
```
### 2025-05-07
#### PASS 6 seconds
#### PASS 5 seconds
#### PASS 4 seconds
#### PASS 8 seconds
### 2025-05-08
#### PASS 7 seconds
### 2025-05-09
#### PASS 5 seconds
### 2025-05-10
#### PASS 4 seconds
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:30:00.1109758Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-05-11T00:30:00.1110472Z     resource_test.go:250: Testing: Verifies a processor cannot transition from CREATED to STOPPED state
2025-05-11T00:30:00.1111157Z     resource_test.go:251: Creating execution project: test-acc-tf-p-6964031297140332027
2025-05-11T00:30:00.1111611Z     resource_test.go:251: 
2025-05-11T00:30:00.1112713Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:00.1114470Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:30:00.1116331Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:352
2025-05-11T00:30:00.1118226Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:251
2025-05-11T00:30:00.1118985Z         	Error:      	Received unexpected error:
2025-05-11T00:30:00.1119856Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:00.1120598Z         	Test:       	TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-05-11T00:30:00.1121718Z         	Messages:   	Project creation failed: test-acc-tf-p-6964031297140332027, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:00.1154692Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped (0.02s)
```
### 2025-05-12
#### PASS 6 seconds
### 2025-05-13
#### PASS 5 seconds
#### PASS 4 seconds
### 2025-05-14
#### PASS 5 seconds
### 2025-05-15
#### PASS 5 seconds
### 2025-05-16
#### PASS 4 seconds
### 2025-05-17
#### PASS 5 seconds
### 2025-05-18
#### PASS 6 seconds
### 2025-05-19
#### PASS 6 seconds
### 2025-05-20
#### PASS 5 seconds
#### PASS 7 seconds
### 2025-05-21
#### PASS 6 seconds
### 2025-05-22
#### PASS 6 seconds
#### PASS 5 seconds
#### PASS 4 seconds
### 2025-05-23
#### FAIL 4 seconds
```
2025-05-23T00:49:48.7964885Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-05-23T00:49:48.7965757Z     resource_test.go:250: Testing: Verifies a processor cannot transition from CREATED to STOPPED state
2025-05-23T00:49:48.7970758Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-05-23T00:49:48.8034596Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-05-23T00:49:48.8035191Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-05-23T00:49:48.8035551Z         
2025-05-23T00:49:48.8035834Z         Error: error creating resource
2025-05-23T00:49:48.8036107Z         
2025-05-23T00:49:48.8036606Z           with mongodbatlas_stream_processor.processor,
2025-05-23T00:49:48.8037391Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-05-23T00:49:48.8038290Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-05-23T00:49:48.8038803Z         
2025-05-23T00:49:48.8039835Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/682fc1361fcba3225667ae39/streams/test-acc-tf-1382360591375102072--CREATED-STOPPED/processor
2025-05-23T00:49:48.8040820Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-05-23T00:49:48.8041636Z         Detail: Streams Processor with this name (processor-created-to-stopped) had a
2025-05-23T00:49:48.8042450Z         problem occur: failed to acquire resources for stream processor validation:
2025-05-23T00:49:48.8043615Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-05-23T00:49:48.8044455Z         [processor-created-to-stopped failed to acquire resources for stream
2025-05-23T00:49:48.8045363Z         processor validation: global resource manager returned no resources],
2025-05-23T00:49:48.8046139Z         BadRequestDetail: 
2025-05-23T00:49:48.8074457Z    test_step_number=1 test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated test_terraform_path=/home/runner/work/_temp/ff69557a-791e-4b49-8991-15a455b1be89/terraform test_working_directory=/tmp/plugintest2866509126
2025-05-23T00:49:48.8100006Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-05-23T00:49:48.8100702Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-23T00:49:48.8101136Z         
2025-05-23T00:49:48.8101418Z         Error: error deleting resource
2025-05-23T00:49:48.8101694Z         
2025-05-23T00:49:48.8102666Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/682fc1361fcba3225667ae39/streams/test-acc-tf-1382360591375102072--CREATED-STOPPED/connections/sample_stream_solar
2025-05-23T00:49:48.8103597Z         DELETE: HTTP 403 Forbidden (Error code:
2025-05-23T00:49:48.8104138Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-05-23T00:49:48.8104810Z         name test-acc-tf-1382360591375102072--CREATED-STOPPED has active processors,
2025-05-23T00:49:48.8105381Z         and cannot be changed. Reason: Forbidden. Params:
2025-05-23T00:49:48.8105940Z         [test-acc-tf-1382360591375102072--CREATED-STOPPED], BadRequestDetail: 
2025-05-23T00:49:48.8119897Z   
2025-05-23T00:49:48.8128138Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped (4.32s)
```
### 2025-05-24
#### PASS 5 seconds
### 2025-05-25
#### PASS 5 seconds
### 2025-05-26
#### PASS 7 seconds
### 2025-05-27
#### PASS 4 seconds
#### PASS 5 seconds
### 2025-05-28
#### PASS 6 seconds
#### PASS 4 seconds
### 2025-05-29
#### PASS 5 seconds
#### PASS 7 seconds
### 2025-05-30
#### PASS 5 seconds
#### PASS 6 seconds
### 2025-05-31
#### PASS 6 seconds
### 2025-06-01
#### PASS 6 seconds
#### PASS 5 seconds
#### PASS 6 seconds
#### PASS 5 seconds
#### PASS 7 seconds
#### PASS 5 seconds
#### PASS 4 seconds
### 2025-06-02
#### PASS 7 seconds
#### PASS 7 seconds
#### PASS 5 seconds
### 2025-06-03
#### PASS 5 seconds
#### PASS 6 seconds
#### PASS 5 seconds
### 2025-06-04
#### PASS 8 seconds
### 2025-06-05
#### PASS 5 seconds
### 2025-06-06
#### PASS 5 seconds
### 2025-06-07
#### PASS 4 seconds
### 2025-06-08
#### PASS 5 seconds
### 2025-06-09
#### PASS 5 seconds
### 2025-06-10
#### PASS 7 seconds
### 2025-06-11
#### PASS 4 seconds
#### PASS 6 seconds
### 2025-06-12
#### PASS 5 seconds
### 2025-06-13
#### PASS 6 seconds
### 2025-06-14
#### PASS 5 seconds
### 2025-06-15
#### PASS 7 seconds
### 2025-06-16
#### PASS 4 seconds
### 2025-06-17
#### PASS 4 seconds
### 2025-06-18
#### PASS 7 seconds
#### PASS 6 seconds
### 2025-06-19
#### PASS 4 seconds
### 2025-06-20
#### PASS 5 seconds
### 2025-06-21
#### PASS 5 seconds
### 2025-06-22
#### PASS 6 seconds
### 2025-06-23
#### PASS 7 seconds
### 2025-06-24
#### PASS 4 seconds
### 2025-06-25
#### PASS 5 seconds
#### PASS 5 seconds
### 2025-06-26
#### PASS 5 seconds
#### PASS 5 seconds
### 2025-06-27
#### PASS 5 seconds
### 2025-06-28
#### PASS 7 seconds
### 2025-06-29
#### PASS 5 seconds
### 2025-06-30
#### PASS 6 seconds
### 2025-07-01
#### PASS 7 seconds
#### PASS 5 seconds
#### PASS 7 seconds
#### PASS 5 seconds
#### PASS 7 seconds
#### PASS 7 seconds
#### PASS 5 seconds
#### PASS 6 seconds
### 2025-07-02
#### PASS 5 seconds
### 2025-07-03
#### FAIL 31 seconds
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-07-03T00:46:39.964000+00:00-TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped',confidence=1.0,ts_when='6 days ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-07-03T00:46:39.9643159Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-07-03T00:46:39.9643856Z     resource_test.go:250: Testing: Verifies a processor cannot transition from CREATED to STOPPED state
2025-07-03T00:46:39.9648956Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-07-03T00:46:39.9693916Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-07-03T00:46:39.9694494Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-07-03T00:46:39.9694842Z         
2025-07-03T00:46:39.9695114Z         Error: error creating resource
2025-07-03T00:46:39.9695634Z         
2025-07-03T00:46:39.9695991Z           with mongodbatlas_stream_processor.processor,
2025-07-03T00:46:39.9696673Z           on terraform_plugin_test.tf line 31, in resource "mongodbatlas_stream_processor" "processor":
2025-07-03T00:46:39.9697296Z           31: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-03T00:46:39.9697615Z         
2025-07-03T00:46:39.9698443Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6865cef1699daf2aab4cc130/streams/test-acc-tf-5638331412912824631--CREATED-STOPPED/processor
2025-07-03T00:46:39.9699316Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-03T00:46:39.9699952Z         Detail: Streams Processor with this name (processor-created-to-stopped) had a
2025-07-03T00:46:39.9700602Z         problem occur: failed to acquire resources for stream processor validation:
2025-07-03T00:46:39.9701218Z         internal error while provisioning resource from global resource manager.
2025-07-03T00:46:39.9701851Z         Reason: Bad Request. Params: [processor-created-to-stopped failed to acquire
2025-07-03T00:46:39.9702501Z         resources for stream processor validation: internal error while provisioning
2025-07-03T00:46:39.9703064Z         resource from global resource manager], BadRequestDetail: 
2025-07-03T00:46:39.9720439Z   
2025-07-03T00:46:39.9782708Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-07-03T00:46:39.9783388Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-03T00:46:39.9783822Z         
2025-07-03T00:46:39.9784092Z         Error: error deleting resource
2025-07-03T00:46:39.9784468Z         
2025-07-03T00:46:39.9785653Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6865cef1699daf2aab4cc130/streams/test-acc-tf-5638331412912824631--CREATED-STOPPED/connections/sample_stream_solar
2025-07-03T00:46:39.9786493Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-03T00:46:39.9787015Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-03T00:46:39.9787667Z         name test-acc-tf-5638331412912824631--CREATED-STOPPED has active processors,
2025-07-03T00:46:39.9788202Z         and cannot be changed. Reason: Forbidden. Params:
2025-07-03T00:46:39.9788744Z         [test-acc-tf-5638331412912824631--CREATED-STOPPED], BadRequestDetail: 
2025-07-03T00:46:39.9791266Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped (31.33s)
```
### 2025-07-04
#### PASS 30 seconds
### 2025-07-05
#### PASS 31 seconds
### 2025-07-06
#### PASS 11 seconds
### 2025-07-07
#### FAIL 31 seconds
```
2025-07-07T00:48:05.7944104Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-07-07T00:48:05.7944790Z     resource_test.go:250: Testing: Verifies a processor cannot transition from CREATED to STOPPED state
2025-07-07T00:48:05.7949809Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-07-07T00:48:05.7968598Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-07-07T00:48:05.7969181Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-07-07T00:48:05.7969529Z         
2025-07-07T00:48:05.7969793Z         Error: error creating resource
2025-07-07T00:48:05.7970050Z         
2025-07-07T00:48:05.7970398Z           with mongodbatlas_stream_processor.processor,
2025-07-07T00:48:05.7971086Z           on terraform_plugin_test.tf line 31, in resource "mongodbatlas_stream_processor" "processor":
2025-07-07T00:48:05.7971705Z           31: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-07T00:48:05.7972027Z         
2025-07-07T00:48:05.7972849Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/686b156affed0c5c678b2a5a/streams/test-acc-tf-208803609599161300--CREATED-STOPPED/processor
2025-07-07T00:48:05.7973707Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-07T00:48:05.7974347Z         Detail: Streams Processor with this name (processor-created-to-stopped) had a
2025-07-07T00:48:05.7975025Z         problem occur: failed to acquire resources for stream processor validation:
2025-07-07T00:48:05.7975815Z         internal error while provisioning resource from global resource manager.
2025-07-07T00:48:05.7976491Z         Reason: Bad Request. Params: [processor-created-to-stopped failed to acquire
2025-07-07T00:48:05.7977137Z         resources for stream processor validation: internal error while provisioning
2025-07-07T00:48:05.7977727Z         resource from global resource manager], BadRequestDetail: 
2025-07-07T00:48:05.7994335Z    test_working_directory=/tmp/plugintest4237475889 test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-07-07T00:48:05.8044468Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-07-07T00:48:05.8045130Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-07T00:48:05.8045546Z         
2025-07-07T00:48:05.8045984Z         Error: error deleting resource
2025-07-07T00:48:05.8046251Z         
2025-07-07T00:48:05.8047183Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/686b156affed0c5c678b2a5a/streams/test-acc-tf-208803609599161300--CREATED-STOPPED/connections/sample_stream_solar
2025-07-07T00:48:05.8047996Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-07T00:48:05.8048515Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-07T00:48:05.8049146Z         name test-acc-tf-208803609599161300--CREATED-STOPPED has active processors,
2025-07-07T00:48:05.8049794Z         and cannot be changed. Reason: Forbidden. Params:
2025-07-07T00:48:05.8050323Z         [test-acc-tf-208803609599161300--CREATED-STOPPED], BadRequestDetail: 
2025-07-07T00:48:05.8063543Z   
2025-07-07T00:48:05.8091001Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped (31.07s)
```
### 2025-07-08
#### FAIL 31 seconds
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-07-08T00:45:56.131000+00:00-TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped',confidence=1.0,ts_when='a day ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-07-08T00:45:56.1312673Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-07-08T00:45:56.1313933Z     resource_test.go:250: Testing: Verifies a processor cannot transition from CREATED to STOPPED state
2025-07-08T00:45:56.1322821Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-07-08T00:45:56.1357217Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-07-08T00:45:56.1358268Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-07-08T00:45:56.1358911Z         
2025-07-08T00:45:56.1359398Z         Error: error creating resource
2025-07-08T00:45:56.1359851Z         
2025-07-08T00:45:56.1360472Z           with mongodbatlas_stream_processor.processor,
2025-07-08T00:45:56.1361728Z           on terraform_plugin_test.tf line 31, in resource "mongodbatlas_stream_processor" "processor":
2025-07-08T00:45:56.1362864Z           31: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-08T00:45:56.1363411Z         
2025-07-08T00:45:56.1365130Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/686c6668a5ec7701ec2c7a57/streams/test-acc-tf-7538268314743422495--CREATED-STOPPED/processor
2025-07-08T00:45:56.1366755Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-08T00:45:56.1367908Z         Detail: Streams Processor with this name (processor-created-to-stopped) had a
2025-07-08T00:45:56.1369087Z         problem occur: failed to acquire resources for stream processor validation:
2025-07-08T00:45:56.1370427Z         internal error while provisioning resource from global resource manager.
2025-07-08T00:45:56.1371588Z         Reason: Bad Request. Params: [processor-created-to-stopped failed to acquire
2025-07-08T00:45:56.1372768Z         resources for stream processor validation: internal error while provisioning
2025-07-08T00:45:56.1373811Z         resource from global resource manager], BadRequestDetail: 
2025-07-08T00:45:56.1404557Z    test_step_number=1
2025-07-08T00:45:56.1484896Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-07-08T00:45:56.1486135Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-08T00:45:56.1486869Z         
2025-07-08T00:45:56.1487313Z         Error: error deleting resource
2025-07-08T00:45:56.1487750Z         
2025-07-08T00:45:56.1489526Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/686c6668a5ec7701ec2c7a57/streams/test-acc-tf-7538268314743422495--CREATED-STOPPED/connections/sample_stream_solar
2025-07-08T00:45:56.1491028Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-08T00:45:56.1491975Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-08T00:45:56.1492835Z         name sample_stream_solar in stream instance
2025-07-08T00:45:56.1493831Z         test-acc-tf-7538268314743422495--CREATED-STOPPED has active processors, and
2025-07-08T00:45:56.1495170Z         cannot be changed. Reason: Forbidden. Params: [sample_stream_solar
2025-07-08T00:45:56.1496227Z         test-acc-tf-7538268314743422495--CREATED-STOPPED], BadRequestDetail: 
2025-07-08T00:45:56.1504501Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped (31.20s)
```
### 2025-07-09
#### FAIL 31 seconds
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-07-09T01:00:42.625000+00:00-TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped',confidence=1.0,ts_when='18 minutes ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-07-09T01:00:42.6255837Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-07-09T01:00:42.6256534Z     resource_test.go:250: Testing: Verifies a processor cannot transition from CREATED to STOPPED state
2025-07-09T01:00:42.6261432Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-07-09T01:00:42.6280268Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-07-09T01:00:42.6280837Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-07-09T01:00:42.6281182Z         
2025-07-09T01:00:42.6281449Z         Error: error creating resource
2025-07-09T01:00:42.6281715Z         
2025-07-09T01:00:42.6282059Z           with mongodbatlas_stream_processor.processor,
2025-07-09T01:00:42.6282735Z           on terraform_plugin_test.tf line 31, in resource "mongodbatlas_stream_processor" "processor":
2025-07-09T01:00:42.6283361Z           31: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-09T01:00:42.6283673Z         
2025-07-09T01:00:42.6284499Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/686db7ff725a79527bea68dc/streams/test-acc-tf-7134197343900082237--CREATED-STOPPED/processor
2025-07-09T01:00:42.6285371Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-09T01:00:42.6286141Z         Detail: Streams Processor with this name (processor-created-to-stopped) had a
2025-07-09T01:00:42.6286785Z         problem occur: failed to acquire resources for stream processor validation:
2025-07-09T01:00:42.6287551Z         internal error while provisioning resource from global resource manager.
2025-07-09T01:00:42.6288215Z         Reason: Bad Request. Params: [processor-created-to-stopped failed to acquire
2025-07-09T01:00:42.6288868Z         resources for stream processor validation: internal error while provisioning
2025-07-09T01:00:42.6289434Z         resource from global resource manager], BadRequestDetail: 
2025-07-09T01:00:42.6313735Z   
2025-07-09T01:00:42.6373170Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-07-09T01:00:42.6373983Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-09T01:00:42.6374403Z         
2025-07-09T01:00:42.6374663Z         Error: error deleting resource
2025-07-09T01:00:42.6374923Z         
2025-07-09T01:00:42.6375867Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/686db7ff725a79527bea68dc/streams/test-acc-tf-7134197343900082237--CREATED-STOPPED/connections/sample_stream_solar
2025-07-09T01:00:42.6376683Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-09T01:00:42.6377210Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-09T01:00:42.6377825Z         name sample_stream_solar in stream instance
2025-07-09T01:00:42.6378369Z         test-acc-tf-7134197343900082237--CREATED-STOPPED has active processors, and
2025-07-09T01:00:42.6378969Z         cannot be changed. Reason: Forbidden. Params: [sample_stream_solar
2025-07-09T01:00:42.6379554Z         test-acc-tf-7134197343900082237--CREATED-STOPPED], BadRequestDetail: 
2025-07-09T01:00:42.6408500Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped (31.18s)
```