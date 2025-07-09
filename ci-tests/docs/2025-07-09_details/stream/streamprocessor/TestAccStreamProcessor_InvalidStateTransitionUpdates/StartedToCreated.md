# stream/streamprocessor/TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated Test Details
# Found 132 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 96) FAIL(x 36)
Success rate: 72.73%

# #  Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
2025-04-13 01:10 |  | qa |  | 5.08s
2025-04-16 00:45 |  | dev |  | 1.01s
2025-04-16 12:49 |  | qa |  | 4.01s
2025-04-16 14:37 |  | dev |  | 1.07s
2025-04-17 00:44 |  | dev |  | 1.01s
2025-04-20 00:49 |  | qa |  | 5.05s
2025-04-24 00:43 |  | dev |  | 5.04s
2025-04-25 00:44 |  | dev |  | 4.06s
2025-04-26 00:45 |  | dev |  | 5.06s
2025-04-27 00:47 |  | qa |  | 4.06s
2025-04-28 00:45 |  | dev |  | 3.06s
2025-04-29 00:44 |  | dev |  | 4.06s
2025-04-30 09:23 |  | qa |  | 5.02s
2025-05-01 00:44 |  | dev |  | 2.01s
2025-05-01 02:17 |  | dev |  | 3.03s
2025-05-01 05:07 |  | dev |  | 3.06s
2025-05-01 06:33 |  | dev |  | 5.06s
2025-05-01 08:00 |  | dev |  | 3.03s
2025-05-02 00:45 |  | dev |  | 3.04s
2025-05-03 00:44 |  | dev |  | 4.01s
2025-05-04 00:47 |  | qa |  | 5.08s
2025-05-05 00:44 |  | dev |  | 3.03s
2025-05-05 10:43 |  | qa |  | 3.08s
2025-05-06 00:45 |  | dev |  | 3.08s
2025-05-07 00:45 |  | dev |  | 4.04s
2025-05-07 18:55 |  | dev |  | 4.10s
2025-05-07 19:17 |  | dev |  | 4.03s
2025-05-11 00:30 |  | qa |  | 0.00s
2025-05-23 00:49 |  | dev |  | 2.08s
2025-07-02 00:46 | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 31.01s
2025-07-03 00:46 | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 31.03s
2025-07-04 00:51 | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 31.00s
2025-07-05 00:44 |  | dev |  | 31.05s
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
#### PASS 9 seconds
### 2025-04-12
#### PASS 9 seconds
### 2025-04-13
#### FAIL 5 seconds
```
2025-04-13T01:10:38.8038943Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-04-13T01:10:38.8039634Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STARTED to CREATED state
2025-04-13T01:10:38.8041636Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-04-13T01:10:38.8150421Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-04-13T01:10:38.8151023Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-04-13T01:10:38.8151387Z         
2025-04-13T01:10:38.8151671Z         Error: error creating resource
2025-04-13T01:10:38.8151950Z         
2025-04-13T01:10:38.8152327Z           with mongodbatlas_stream_processor.processor,
2025-04-13T01:10:38.8153054Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-13T01:10:38.8153715Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-13T01:10:38.8154052Z         
2025-04-13T01:10:38.8154924Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/67fb0a6a2ef24d0491ef3bad/streams/test-acc-tf-7348391933176376504--STARTED-CREATED/processor
2025-04-13T01:10:38.8155820Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-13T01:10:38.8156614Z         Detail: Streams Processor with this name (processor-started-to-created) had a
2025-04-13T01:10:38.8157291Z         problem occur: failed to acquire resources for stream processor validation:
2025-04-13T01:10:38.8157950Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-04-13T01:10:38.8158594Z         [processor-started-to-created failed to acquire resources for stream
2025-04-13T01:10:38.8159225Z         processor validation: global resource manager returned no resources],
2025-04-13T01:10:38.8159659Z         BadRequestDetail: 
2025-04-13T01:10:38.8173170Z   
2025-04-13T01:10:38.8173786Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-13T01:10:38.8174243Z         
2025-04-13T01:10:38.8174531Z         Error: error deleting resource
2025-04-13T01:10:38.8174815Z         
2025-04-13T01:10:38.8175798Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/67fb0a6a2ef24d0491ef3bad/streams/test-acc-tf-7348391933176376504--STARTED-CREATED/connections/sample_stream_solar
2025-04-13T01:10:38.8176631Z         DELETE: HTTP 403 Forbidden (Error code:
2025-04-13T01:10:38.8177186Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-04-13T01:10:38.8177850Z         name test-acc-tf-7348391933176376504--STARTED-CREATED has active processors,
2025-04-13T01:10:38.8178409Z         and cannot be changed. Reason: Forbidden. Params:
2025-04-13T01:10:38.8178970Z         [test-acc-tf-7348391933176376504--STARTED-CREATED], BadRequestDetail: 
2025-04-13T01:10:38.8181832Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated (5.79s)
```
### 2025-04-14
#### PASS 11 seconds
### 2025-04-15
#### PASS 9 seconds
### 2025-04-16
#### FAIL a second
```
2025-04-16T00:45:12.3686293Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-04-16T00:45:12.3686680Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STARTED to CREATED state
2025-04-16T00:45:12.3687406Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-04-16T00:45:12.3706154Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-04-16T00:45:12.3706429Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-04-16T00:45:12.3706527Z         
2025-04-16T00:45:12.3706706Z         Error: error creating resource
2025-04-16T00:45:12.3706820Z         
2025-04-16T00:45:12.3715394Z           with mongodbatlas_stream_processor.processor,
2025-04-16T00:45:12.3715935Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-16T00:45:12.3716273Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-16T00:45:12.3716372Z         
2025-04-16T00:45:12.3717142Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67fef96383625331ad35237f/streams/test-acc-tf-5243613557488519194--STARTED-CREATED/processor
2025-04-16T00:45:12.3717491Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-16T00:45:12.3718058Z         Detail: Streams Processor with this name (processor-started-to-created) had a
2025-04-16T00:45:12.3718383Z         problem occur: RBAC: access denied. Reason: Bad Request. Params:
2025-04-16T00:45:12.3718743Z         [processor-started-to-created RBAC: access denied], BadRequestDetail: 
2025-04-16T00:45:12.3725838Z    test_terraform_path=/home/runner/work/_temp/92645992-1140-423c-8ef0-74ddbe0cfc31/terraform
2025-04-16T00:45:12.3744828Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-04-16T00:45:12.3745208Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T00:45:12.3745304Z         
2025-04-16T00:45:12.3745490Z         Error: error deleting resource
2025-04-16T00:45:12.3745583Z         
2025-04-16T00:45:12.3746498Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67fef96383625331ad35237f/streams/test-acc-tf-5243613557488519194--STARTED-CREATED/connections/sample_stream_solar
2025-04-16T00:45:12.3746839Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T00:45:12.3747172Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T00:45:12.3747319Z         BadRequestDetail: 
2025-04-16T00:45:12.3752823Z    test_terraform_path=/home/runner/work/_temp/92645992-1140-423c-8ef0-74ddbe0cfc31/terraform test_working_directory=/tmp/plugintest2624237198
2025-04-16T00:45:12.3756712Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated (1.12s)
```
#### FAIL 4 seconds
```
2025-04-16T12:49:32.8753366Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-04-16T12:49:32.8753759Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STARTED to CREATED state
2025-04-16T12:49:32.8754489Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-04-16T12:49:32.8784623Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-04-16T12:49:32.8785029Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-04-16T12:49:32.8785124Z         
2025-04-16T12:49:32.8785291Z         Error: error creating resource
2025-04-16T12:49:32.8785382Z         
2025-04-16T12:49:32.8785640Z           with mongodbatlas_stream_processor.processor,
2025-04-16T12:49:32.8786148Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-16T12:49:32.8786454Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-16T12:49:32.8786545Z         
2025-04-16T12:49:32.8787287Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/67ffa2daaeda942dc8ba2ae5/streams/test-acc-tf-4374349910932668217--STARTED-CREATED/processor
2025-04-16T12:49:32.8787618Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-16T12:49:32.8788005Z         Detail: Streams Processor with this name (processor-started-to-created) had a
2025-04-16T12:49:32.8788312Z         problem occur: RBAC: access denied. Reason: Bad Request. Params:
2025-04-16T12:49:32.8788661Z         [processor-started-to-created RBAC: access denied], BadRequestDetail: 
2025-04-16T12:49:32.8794769Z   
2025-04-16T12:49:32.8814485Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-04-16T12:49:32.8814947Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T12:49:32.8815044Z         
2025-04-16T12:49:32.8815215Z         Error: error deleting resource
2025-04-16T12:49:32.8815308Z         
2025-04-16T12:49:32.8816285Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/67ffa2daaeda942dc8ba2ae5/streams/test-acc-tf-4374349910932668217--STARTED-CREATED/connections/sample_stream_solar
2025-04-16T12:49:32.8816726Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T12:49:32.8817045Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T12:49:32.8817246Z         BadRequestDetail: 
2025-04-16T12:49:32.8818698Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated (4.10s)
```
#### FAIL a second
```
2025-04-16T14:37:27.0747969Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-04-16T14:37:27.0748357Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STARTED to CREATED state
2025-04-16T14:37:27.0749071Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-04-16T14:37:27.0779578Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-04-16T14:37:27.0779854Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-04-16T14:37:27.0779950Z         
2025-04-16T14:37:27.0780126Z         Error: error creating resource
2025-04-16T14:37:27.0780373Z         
2025-04-16T14:37:27.0780632Z           with mongodbatlas_stream_processor.processor,
2025-04-16T14:37:27.0781120Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-16T14:37:27.0781438Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-16T14:37:27.0781530Z         
2025-04-16T14:37:27.0782292Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67ffbd1751a0bf7e37921337/streams/test-acc-tf-5138939184684188276--STARTED-CREATED/processor
2025-04-16T14:37:27.0782634Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-16T14:37:27.0783019Z         Detail: Streams Processor with this name (processor-started-to-created) had a
2025-04-16T14:37:27.0783319Z         problem occur: RBAC: access denied. Reason: Bad Request. Params:
2025-04-16T14:37:27.0783833Z         [processor-started-to-created RBAC: access denied], BadRequestDetail: 
2025-04-16T14:37:27.0789505Z   
2025-04-16T14:37:27.0806768Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-04-16T14:37:27.0807136Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T14:37:27.0807231Z         
2025-04-16T14:37:27.0807403Z         Error: error deleting resource
2025-04-16T14:37:27.0807498Z         
2025-04-16T14:37:27.0808369Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67ffbd1751a0bf7e37921337/streams/test-acc-tf-5138939184684188276--STARTED-CREATED/connections/sample_stream_solar
2025-04-16T14:37:27.0808699Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T14:37:27.0809022Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T14:37:27.0809164Z         BadRequestDetail: 
2025-04-16T14:37:27.0810579Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated (1.67s)
```
### 2025-04-17
#### FAIL a second
```
2025-04-17T00:44:44.9722099Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-04-17T00:44:44.9722493Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STARTED to CREATED state
2025-04-17T00:44:44.9723216Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-04-17T00:44:44.9730733Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-04-17T00:44:44.9731018Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-04-17T00:44:44.9731111Z         
2025-04-17T00:44:44.9731290Z         Error: error creating resource
2025-04-17T00:44:44.9731383Z         
2025-04-17T00:44:44.9731655Z           with mongodbatlas_stream_processor.processor,
2025-04-17T00:44:44.9732147Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-17T00:44:44.9732473Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-17T00:44:44.9732567Z         
2025-04-17T00:44:44.9733326Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68004acb5feb172e558c5f56/streams/test-acc-tf-8421959066689998976--STARTED-CREATED/processor
2025-04-17T00:44:44.9733785Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-17T00:44:44.9734176Z         Detail: Streams Processor with this name (processor-started-to-created) had a
2025-04-17T00:44:44.9734488Z         problem occur: RBAC: access denied. Reason: Bad Request. Params:
2025-04-17T00:44:44.9734840Z         [processor-started-to-created RBAC: access denied], BadRequestDetail: 
2025-04-17T00:44:44.9741994Z    test_terraform_path=/home/runner/work/_temp/7820bfc0-4292-41a1-b17d-9a8aaba10970/terraform test_step_number=1 test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-04-17T00:44:44.9774539Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-04-17T00:44:44.9774915Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-17T00:44:44.9775013Z         
2025-04-17T00:44:44.9775187Z         Error: error deleting resource
2025-04-17T00:44:44.9775281Z         
2025-04-17T00:44:44.9776168Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68004acb5feb172e558c5f56/streams/test-acc-tf-8421959066689998976--STARTED-CREATED/connections/sample_stream_solar
2025-04-17T00:44:44.9776508Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-17T00:44:44.9776835Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-17T00:44:44.9776984Z         BadRequestDetail: 
2025-04-17T00:44:44.9780296Z    test_working_directory=/tmp/plugintest4146429934 test_terraform_path=/home/runner/work/_temp/7820bfc0-4292-41a1-b17d-9a8aaba10970/terraform
2025-04-17T00:44:44.9783981Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated (1.06s)
```
### 2025-04-18
#### PASS 12 seconds
### 2025-04-19
#### PASS 10 seconds
### 2025-04-20
#### FAIL 5 seconds
```
2025-04-20T00:49:07.0174542Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-04-20T00:49:07.0175790Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STARTED to CREATED state
2025-04-20T00:49:07.0178603Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-04-20T00:49:07.0324715Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-04-20T00:49:07.0325819Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-04-20T00:49:07.0326485Z         
2025-04-20T00:49:07.0326989Z         Error: error creating resource
2025-04-20T00:49:07.0327480Z         
2025-04-20T00:49:07.0328152Z           with mongodbatlas_stream_processor.processor,
2025-04-20T00:49:07.0329462Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-20T00:49:07.0330658Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-20T00:49:07.0331255Z         
2025-04-20T00:49:07.0333015Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68043fe0e9e1f62c2da38572/streams/test-acc-tf-2858346783047725019--STARTED-CREATED/processor
2025-04-20T00:49:07.0334669Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-20T00:49:07.0335889Z         Detail: Streams Processor with this name (processor-started-to-created) had a
2025-04-20T00:49:07.0337138Z         problem occur: failed to acquire resources for stream processor validation:
2025-04-20T00:49:07.0338356Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-04-20T00:49:07.0339728Z         [processor-started-to-created failed to acquire resources for stream
2025-04-20T00:49:07.0340908Z         processor validation: global resource manager returned no resources],
2025-04-20T00:49:07.0341688Z         BadRequestDetail: 
2025-04-20T00:49:07.0366954Z   
2025-04-20T00:49:07.0404373Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-04-20T00:49:07.0405649Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-20T00:49:07.0406436Z         
2025-04-20T00:49:07.0406985Z         Error: error deleting resource
2025-04-20T00:49:07.0407476Z         
2025-04-20T00:49:07.0409321Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68043fe0e9e1f62c2da38572/streams/test-acc-tf-2858346783047725019--STARTED-CREATED/connections/sample_stream_solar
2025-04-20T00:49:07.0410864Z         DELETE: HTTP 403 Forbidden (Error code:
2025-04-20T00:49:07.0411931Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-04-20T00:49:07.0413331Z         name test-acc-tf-2858346783047725019--STARTED-CREATED has active processors,
2025-04-20T00:49:07.0414349Z         and cannot be changed. Reason: Forbidden. Params:
2025-04-20T00:49:07.0415372Z         [test-acc-tf-2858346783047725019--STARTED-CREATED], BadRequestDetail: 
2025-04-20T00:49:07.0420147Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated (5.46s)
```
### 2025-04-21
#### PASS 11 seconds
### 2025-04-22
#### PASS 12 seconds
### 2025-04-23
#### PASS 10 seconds
### 2025-04-24
#### FAIL 5 seconds
```
2025-04-24T00:43:21.1468946Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-04-24T00:43:21.1469747Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STARTED to CREATED state
2025-04-24T00:43:21.1471419Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-04-24T00:43:21.1515136Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-04-24T00:43:21.1515722Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-04-24T00:43:21.1516082Z         
2025-04-24T00:43:21.1516357Z         Error: error creating resource
2025-04-24T00:43:21.1516621Z         
2025-04-24T00:43:21.1517152Z           with mongodbatlas_stream_processor.processor,
2025-04-24T00:43:21.1517843Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-24T00:43:21.1518487Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-24T00:43:21.1518816Z         
2025-04-24T00:43:21.1519653Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68098564f1b81907e7097fd5/streams/test-acc-tf-4615982842177407696--STARTED-CREATED/processor
2025-04-24T00:43:21.1520536Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-24T00:43:21.1521180Z         Detail: Streams Processor with this name (processor-started-to-created) had a
2025-04-24T00:43:21.1521845Z         problem occur: failed to acquire resources for stream processor validation:
2025-04-24T00:43:21.1522602Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-04-24T00:43:21.1523233Z         [processor-started-to-created failed to acquire resources for stream
2025-04-24T00:43:21.1523851Z         processor validation: global resource manager returned no resources],
2025-04-24T00:43:21.1524389Z         BadRequestDetail: 
2025-04-24T00:43:21.1540347Z    test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-04-24T00:43:21.1584246Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-04-24T00:43:21.1584927Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-24T00:43:21.1585358Z         
2025-04-24T00:43:21.1585628Z         Error: error deleting resource
2025-04-24T00:43:21.1585895Z         
2025-04-24T00:43:21.1586850Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68098564f1b81907e7097fd5/streams/test-acc-tf-4615982842177407696--STARTED-CREATED/connections/sample_stream_solar
2025-04-24T00:43:21.1587671Z         DELETE: HTTP 403 Forbidden (Error code:
2025-04-24T00:43:21.1588203Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-04-24T00:43:21.1588847Z         name test-acc-tf-4615982842177407696--STARTED-CREATED has active processors,
2025-04-24T00:43:21.1589384Z         and cannot be changed. Reason: Forbidden. Params:
2025-04-24T00:43:21.1589930Z         [test-acc-tf-4615982842177407696--STARTED-CREATED], BadRequestDetail: 
2025-04-24T00:43:21.1603203Z    test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated test_terraform_path=/home/runner/work/_temp/5edcbd20-a505-4ac5-832d-94520538c2a4/terraform test_working_directory=/tmp/plugintest389806004
2025-04-24T00:43:21.1612954Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated (5.43s)
```
### 2025-04-25
#### FAIL 4 seconds
```
2025-04-25T00:44:59.2537641Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-04-25T00:44:59.2538345Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STARTED to CREATED state
2025-04-25T00:44:59.2540072Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-04-25T00:44:59.2630733Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-04-25T00:44:59.2631334Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-04-25T00:44:59.2631706Z         
2025-04-25T00:44:59.2632115Z         Error: error creating resource
2025-04-25T00:44:59.2632389Z         
2025-04-25T00:44:59.2632761Z           with mongodbatlas_stream_processor.processor,
2025-04-25T00:44:59.2633461Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-25T00:44:59.2634116Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-25T00:44:59.2634451Z         
2025-04-25T00:44:59.2635327Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/680ad7124656875332b381fe/streams/test-acc-tf-1328883813516598719--STARTED-CREATED/processor
2025-04-25T00:44:59.2636431Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-25T00:44:59.2637092Z         Detail: Streams Processor with this name (processor-started-to-created) had a
2025-04-25T00:44:59.2637770Z         problem occur: failed to acquire resources for stream processor validation:
2025-04-25T00:44:59.2638416Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-04-25T00:44:59.2639062Z         [processor-started-to-created failed to acquire resources for stream
2025-04-25T00:44:59.2639690Z         processor validation: global resource manager returned no resources],
2025-04-25T00:44:59.2640118Z         BadRequestDetail: 
2025-04-25T00:44:59.2653167Z    test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-04-25T00:44:59.2674040Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-04-25T00:44:59.2674754Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-25T00:44:59.2675190Z         
2025-04-25T00:44:59.2675479Z         Error: error deleting resource
2025-04-25T00:44:59.2676021Z         
2025-04-25T00:44:59.2677015Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/680ad7124656875332b381fe/streams/test-acc-tf-1328883813516598719--STARTED-CREATED/connections/sample_stream_solar
2025-04-25T00:44:59.2677857Z         DELETE: HTTP 403 Forbidden (Error code:
2025-04-25T00:44:59.2678399Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-04-25T00:44:59.2679061Z         name test-acc-tf-1328883813516598719--STARTED-CREATED has active processors,
2025-04-25T00:44:59.2679611Z         and cannot be changed. Reason: Forbidden. Params:
2025-04-25T00:44:59.2680181Z         [test-acc-tf-1328883813516598719--STARTED-CREATED], BadRequestDetail: 
2025-04-25T00:44:59.2682913Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated (4.57s)
```
### 2025-04-26
#### FAIL 5 seconds
```
2025-04-26T00:45:05.5700572Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-04-26T00:45:05.5701411Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STARTED to CREATED state
2025-04-26T00:45:05.5703570Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-04-26T00:45:05.5754306Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-04-26T00:45:05.5754913Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-04-26T00:45:05.5755275Z         
2025-04-26T00:45:05.5755545Z         Error: error creating resource
2025-04-26T00:45:05.5755815Z         
2025-04-26T00:45:05.5756241Z           with mongodbatlas_stream_processor.processor,
2025-04-26T00:45:05.5757098Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-26T00:45:05.5757922Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-26T00:45:05.5758256Z         
2025-04-26T00:45:05.5759101Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/680c286e6f7a760e767795ac/streams/test-acc-tf-5798749072394884129--STARTED-CREATED/processor
2025-04-26T00:45:05.5760075Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-26T00:45:05.5760764Z         Detail: Streams Processor with this name (processor-started-to-created) had a
2025-04-26T00:45:05.5761427Z         problem occur: failed to acquire resources for stream processor validation:
2025-04-26T00:45:05.5762057Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-04-26T00:45:05.5762685Z         [processor-started-to-created failed to acquire resources for stream
2025-04-26T00:45:05.5763294Z         processor validation: global resource manager returned no resources],
2025-04-26T00:45:05.5763714Z         BadRequestDetail: 
2025-04-26T00:45:05.5777042Z    test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-04-26T00:45:05.5797791Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-04-26T00:45:05.5798472Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-26T00:45:05.5798909Z         
2025-04-26T00:45:05.5799177Z         Error: error deleting resource
2025-04-26T00:45:05.5799443Z         
2025-04-26T00:45:05.5800403Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/680c286e6f7a760e767795ac/streams/test-acc-tf-5798749072394884129--STARTED-CREATED/connections/sample_stream_solar
2025-04-26T00:45:05.5801240Z         DELETE: HTTP 403 Forbidden (Error code:
2025-04-26T00:45:05.5801777Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-04-26T00:45:05.5802424Z         name test-acc-tf-5798749072394884129--STARTED-CREATED has active processors,
2025-04-26T00:45:05.5802974Z         and cannot be changed. Reason: Forbidden. Params:
2025-04-26T00:45:05.5803521Z         [test-acc-tf-5798749072394884129--STARTED-CREATED], BadRequestDetail: 
2025-04-26T00:45:05.5820872Z   
2025-04-26T00:45:05.5851879Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated (5.58s)
```
### 2025-04-27
#### FAIL 4 seconds
```
2025-04-27T00:47:25.4663289Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-04-27T00:47:25.4663980Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STARTED to CREATED state
2025-04-27T00:47:25.4665792Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-04-27T00:47:25.4754953Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-04-27T00:47:25.4755542Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-04-27T00:47:25.4755910Z         
2025-04-27T00:47:25.4756187Z         Error: error creating resource
2025-04-27T00:47:25.4756452Z         
2025-04-27T00:47:25.4756815Z           with mongodbatlas_stream_processor.processor,
2025-04-27T00:47:25.4757502Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-27T00:47:25.4758357Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-27T00:47:25.4758748Z         
2025-04-27T00:47:25.4759603Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/680d7a6ff71e7361cf7450a7/streams/test-acc-tf-2243641514326800870--STARTED-CREATED/processor
2025-04-27T00:47:25.4760499Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-27T00:47:25.4761149Z         Detail: Streams Processor with this name (processor-started-to-created) had a
2025-04-27T00:47:25.4761949Z         problem occur: failed to acquire resources for stream processor validation:
2025-04-27T00:47:25.4762592Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-04-27T00:47:25.4763225Z         [processor-started-to-created failed to acquire resources for stream
2025-04-27T00:47:25.4763855Z         processor validation: global resource manager returned no resources],
2025-04-27T00:47:25.4764283Z         BadRequestDetail: 
2025-04-27T00:47:25.4777682Z    test_step_number=1
2025-04-27T00:47:25.4804824Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-04-27T00:47:25.4805538Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-27T00:47:25.4805977Z         
2025-04-27T00:47:25.4806268Z         Error: error deleting resource
2025-04-27T00:47:25.4806546Z         
2025-04-27T00:47:25.4807530Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/680d7a6ff71e7361cf7450a7/streams/test-acc-tf-2243641514326800870--STARTED-CREATED/connections/sample_stream_solar
2025-04-27T00:47:25.4808596Z         DELETE: HTTP 403 Forbidden (Error code:
2025-04-27T00:47:25.4809146Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-04-27T00:47:25.4810014Z         name test-acc-tf-2243641514326800870--STARTED-CREATED has active processors,
2025-04-27T00:47:25.4810575Z         and cannot be changed. Reason: Forbidden. Params:
2025-04-27T00:47:25.4811137Z         [test-acc-tf-2243641514326800870--STARTED-CREATED], BadRequestDetail: 
2025-04-27T00:47:25.4813671Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated (4.64s)
```
### 2025-04-28
#### FAIL 3 seconds
```
2025-04-28T00:45:17.1665132Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-04-28T00:45:17.1666378Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STARTED to CREATED state
2025-04-28T00:45:17.1669579Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-04-28T00:45:17.1863577Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-04-28T00:45:17.1864655Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-04-28T00:45:17.1865300Z         
2025-04-28T00:45:17.1865798Z         Error: error creating resource
2025-04-28T00:45:17.1866267Z         
2025-04-28T00:45:17.1866906Z           with mongodbatlas_stream_processor.processor,
2025-04-28T00:45:17.1868160Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-28T00:45:17.1869342Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-28T00:45:17.1869907Z         
2025-04-28T00:45:17.1871458Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/680ecbcb1ad7050ec5b1f1a8/streams/test-acc-tf-7017334375181037402--STARTED-CREATED/processor
2025-04-28T00:45:17.1873061Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-28T00:45:17.1874526Z         Detail: Streams Processor with this name (processor-started-to-created) had a
2025-04-28T00:45:17.1875722Z         problem occur: failed to acquire resources for stream processor validation:
2025-04-28T00:45:17.1876884Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-04-28T00:45:17.1878020Z         [processor-started-to-created failed to acquire resources for stream
2025-04-28T00:45:17.1879118Z         processor validation: global resource manager returned no resources],
2025-04-28T00:45:17.1879879Z         BadRequestDetail: 
2025-04-28T00:45:17.1899912Z    test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated test_terraform_path=/home/runner/work/_temp/c6c4c4bc-e0ba-48d7-8946-01b0db157b58/terraform
2025-04-28T00:45:17.1901085Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-28T00:45:17.1901587Z         
2025-04-28T00:45:17.1901896Z         Error: error deleting resource
2025-04-28T00:45:17.1902229Z         
2025-04-28T00:45:17.1903478Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/680ecbcb1ad7050ec5b1f1a8/streams/test-acc-tf-7017334375181037402--STARTED-CREATED/connections/sample_stream_solar
2025-04-28T00:45:17.1904428Z         DELETE: HTTP 403 Forbidden (Error code:
2025-04-28T00:45:17.1905046Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-04-28T00:45:17.1905789Z         name test-acc-tf-7017334375181037402--STARTED-CREATED has active processors,
2025-04-28T00:45:17.1906407Z         and cannot be changed. Reason: Forbidden. Params:
2025-04-28T00:45:17.1907038Z         [test-acc-tf-7017334375181037402--STARTED-CREATED], BadRequestDetail: 
2025-04-28T00:45:17.1909930Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated (3.65s)
```
### 2025-04-29
#### FAIL 4 seconds
```
2025-04-29T00:44:03.0052709Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-04-29T00:44:03.0053393Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STARTED to CREATED state
2025-04-29T00:44:03.0055462Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-04-29T00:44:03.0076226Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-04-29T00:44:03.0076815Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-04-29T00:44:03.0077182Z         
2025-04-29T00:44:03.0077457Z         Error: error creating resource
2025-04-29T00:44:03.0077720Z         
2025-04-29T00:44:03.0078083Z           with mongodbatlas_stream_processor.processor,
2025-04-29T00:44:03.0078909Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-29T00:44:03.0079566Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-29T00:44:03.0079889Z         
2025-04-29T00:44:03.0080730Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68101d04494caf27baac3333/streams/test-acc-tf-8018030504128599525--STARTED-CREATED/processor
2025-04-29T00:44:03.0081616Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-29T00:44:03.0082263Z         Detail: Streams Processor with this name (processor-started-to-created) had a
2025-04-29T00:44:03.0082926Z         problem occur: failed to acquire resources for stream processor validation:
2025-04-29T00:44:03.0083561Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-04-29T00:44:03.0084306Z         [processor-started-to-created failed to acquire resources for stream
2025-04-29T00:44:03.0084937Z         processor validation: global resource manager returned no resources],
2025-04-29T00:44:03.0085359Z         BadRequestDetail: 
2025-04-29T00:44:03.0098774Z   
2025-04-29T00:44:03.0099264Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-29T00:44:03.0099706Z         
2025-04-29T00:44:03.0099991Z         Error: error deleting resource
2025-04-29T00:44:03.0100256Z         
2025-04-29T00:44:03.0101236Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68101d04494caf27baac3333/streams/test-acc-tf-8018030504128599525--STARTED-CREATED/connections/sample_stream_solar
2025-04-29T00:44:03.0102080Z         DELETE: HTTP 403 Forbidden (Error code:
2025-04-29T00:44:03.0102620Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-04-29T00:44:03.0103286Z         name test-acc-tf-8018030504128599525--STARTED-CREATED has active processors,
2025-04-29T00:44:03.0104079Z         and cannot be changed. Reason: Forbidden. Params:
2025-04-29T00:44:03.0104669Z         [test-acc-tf-8018030504128599525--STARTED-CREATED], BadRequestDetail: 
2025-04-29T00:44:03.0108485Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated (4.57s)
```
### 2025-04-30
#### PASS 8 seconds
#### FAIL 5 seconds
```
2025-04-30T09:23:01.8460025Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-04-30T09:23:01.8460704Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STARTED to CREATED state
2025-04-30T09:23:01.8462371Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-04-30T09:23:01.8590472Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-04-30T09:23:01.8591092Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-04-30T09:23:01.8591469Z         
2025-04-30T09:23:01.8591748Z         Error: error creating resource
2025-04-30T09:23:01.8592016Z         
2025-04-30T09:23:01.8592377Z           with mongodbatlas_stream_processor.processor,
2025-04-30T09:23:01.8593082Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-04-30T09:23:01.8593840Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-04-30T09:23:01.8594312Z         
2025-04-30T09:23:01.8595158Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6811e79687449e5deb011ac5/streams/test-acc-tf-4320708896408564328--STARTED-CREATED/processor
2025-04-30T09:23:01.8596043Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-04-30T09:23:01.8596696Z         Detail: Streams Processor with this name (processor-started-to-created) had a
2025-04-30T09:23:01.8597499Z         problem occur: failed to acquire resources for stream processor validation:
2025-04-30T09:23:01.8598144Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-04-30T09:23:01.8598769Z         [processor-started-to-created failed to acquire resources for stream
2025-04-30T09:23:01.8599397Z         processor validation: global resource manager returned no resources],
2025-04-30T09:23:01.8599817Z         BadRequestDetail: 
2025-04-30T09:23:01.8612350Z    test_working_directory=/tmp/plugintest56468164 test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated test_terraform_path=/home/runner/work/_temp/e9d9e2d7-1093-496a-b712-8e78e21daf85/terraform test_step_number=1
2025-04-30T09:23:01.8613916Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-30T09:23:01.8614371Z         
2025-04-30T09:23:01.8614779Z         Error: error deleting resource
2025-04-30T09:23:01.8615051Z         
2025-04-30T09:23:01.8616002Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6811e79687449e5deb011ac5/streams/test-acc-tf-4320708896408564328--STARTED-CREATED/connections/sample_stream_solar
2025-04-30T09:23:01.8616835Z         DELETE: HTTP 403 Forbidden (Error code:
2025-04-30T09:23:01.8617360Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-04-30T09:23:01.8618012Z         name test-acc-tf-4320708896408564328--STARTED-CREATED has active processors,
2025-04-30T09:23:01.8618546Z         and cannot be changed. Reason: Forbidden. Params:
2025-04-30T09:23:01.8619083Z         [test-acc-tf-4320708896408564328--STARTED-CREATED], BadRequestDetail: 
2025-04-30T09:23:01.8621601Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated (5.17s)
```
### 2025-05-01
#### FAIL 2 seconds
```
2025-05-01T00:44:07.7397043Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-05-01T00:44:07.7397843Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STARTED to CREATED state
2025-05-01T00:44:07.7399545Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-05-01T00:44:07.7417833Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-05-01T00:44:07.7418435Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-05-01T00:44:07.7418804Z         
2025-05-01T00:44:07.7419087Z         Error: error creating resource
2025-05-01T00:44:07.7419359Z         
2025-05-01T00:44:07.7419726Z           with mongodbatlas_stream_processor.processor,
2025-05-01T00:44:07.7420423Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-05-01T00:44:07.7421072Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-05-01T00:44:07.7421403Z         
2025-05-01T00:44:07.7422394Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6812c0395870256394092b41/streams/test-acc-tf-8338408899755658517--STARTED-CREATED/processor
2025-05-01T00:44:07.7423605Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-05-01T00:44:07.7424380Z         Detail: Streams Processor with this name (processor-started-to-created) had a
2025-05-01T00:44:07.7425288Z         problem occur: failed to acquire resources for stream processor validation:
2025-05-01T00:44:07.7426067Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-05-01T00:44:07.7426802Z         [processor-started-to-created failed to acquire resources for stream
2025-05-01T00:44:07.7427527Z         processor validation: global resource manager returned no resources],
2025-05-01T00:44:07.7427958Z         BadRequestDetail: 
2025-05-01T00:44:07.7443044Z   
2025-05-01T00:44:07.7443709Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-01T00:44:07.7444236Z         
2025-05-01T00:44:07.7444527Z         Error: error deleting resource
2025-05-01T00:44:07.7444829Z         
2025-05-01T00:44:07.7445986Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6812c0395870256394092b41/streams/test-acc-tf-8338408899755658517--STARTED-CREATED/connections/sample_stream_solar
2025-05-01T00:44:07.7446948Z         DELETE: HTTP 403 Forbidden (Error code:
2025-05-01T00:44:07.7447591Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-05-01T00:44:07.7448351Z         name test-acc-tf-8338408899755658517--STARTED-CREATED has active processors,
2025-05-01T00:44:07.7448996Z         and cannot be changed. Reason: Forbidden. Params:
2025-05-01T00:44:07.7449556Z         [test-acc-tf-8338408899755658517--STARTED-CREATED], BadRequestDetail: 
2025-05-01T00:44:07.7468320Z    test_working_directory=/tmp/plugintest338294606 test_step_number=1
2025-05-01T00:44:07.7502055Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated (2.14s)
```
#### FAIL 3 seconds
```
2025-05-01T02:17:05.8585404Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-05-01T02:17:05.8586234Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STARTED to CREATED state
2025-05-01T02:17:05.8588000Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-05-01T02:17:05.8606289Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-05-01T02:17:05.8606908Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-05-01T02:17:05.8607297Z         
2025-05-01T02:17:05.8607606Z         Error: error creating resource
2025-05-01T02:17:05.8607900Z         
2025-05-01T02:17:05.8608283Z           with mongodbatlas_stream_processor.processor,
2025-05-01T02:17:05.8609165Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-05-01T02:17:05.8609830Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-05-01T02:17:05.8610315Z         
2025-05-01T02:17:05.8611195Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6812d5a0c53aa6122b25a1de/streams/test-acc-tf-5707424701463850657--STARTED-CREATED/processor
2025-05-01T02:17:05.8612110Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-05-01T02:17:05.8612794Z         Detail: Streams Processor with this name (processor-started-to-created) had a
2025-05-01T02:17:05.8613481Z         problem occur: failed to acquire resources for stream processor validation:
2025-05-01T02:17:05.8614151Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-05-01T02:17:05.8614802Z         [processor-started-to-created failed to acquire resources for stream
2025-05-01T02:17:05.8615447Z         processor validation: global resource manager returned no resources],
2025-05-01T02:17:05.8615891Z         BadRequestDetail: 
2025-05-01T02:17:05.8629759Z   
2025-05-01T02:17:05.8630267Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-01T02:17:05.8630724Z         
2025-05-01T02:17:05.8631032Z         Error: error deleting resource
2025-05-01T02:17:05.8631333Z         
2025-05-01T02:17:05.8632320Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6812d5a0c53aa6122b25a1de/streams/test-acc-tf-5707424701463850657--STARTED-CREATED/connections/sample_stream_solar
2025-05-01T02:17:05.8633175Z         DELETE: HTTP 403 Forbidden (Error code:
2025-05-01T02:17:05.8633738Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-05-01T02:17:05.8634411Z         name test-acc-tf-5707424701463850657--STARTED-CREATED has active processors,
2025-05-01T02:17:05.8634984Z         and cannot be changed. Reason: Forbidden. Params:
2025-05-01T02:17:05.8635559Z         [test-acc-tf-5707424701463850657--STARTED-CREATED], BadRequestDetail: 
2025-05-01T02:17:05.8652583Z    test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated test_terraform_path=/home/runner/work/_temp/eaead056-25d5-4d1e-98a4-b63773199695/terraform
2025-05-01T02:17:05.8732450Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated (3.33s)
```
#### PASS 8 seconds
#### FAIL 3 seconds
```
2025-05-01T05:07:13.2481722Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-05-01T05:07:13.2482505Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STARTED to CREATED state
2025-05-01T05:07:13.2484259Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-05-01T05:07:13.2547947Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-05-01T05:07:13.2548543Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-05-01T05:07:13.2548920Z         
2025-05-01T05:07:13.2549201Z         Error: error creating resource
2025-05-01T05:07:13.2549478Z         
2025-05-01T05:07:13.2549835Z           with mongodbatlas_stream_processor.processor,
2025-05-01T05:07:13.2550518Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-05-01T05:07:13.2551376Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-05-01T05:07:13.2551718Z         
2025-05-01T05:07:13.2552677Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6812fdf713d6b32170fea898/streams/test-acc-tf-2436475475427371968--STARTED-CREATED/processor
2025-05-01T05:07:13.2553568Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-05-01T05:07:13.2554221Z         Detail: Streams Processor with this name (processor-started-to-created) had a
2025-05-01T05:07:13.2554892Z         problem occur: failed to acquire resources for stream processor validation:
2025-05-01T05:07:13.2555538Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-05-01T05:07:13.2556176Z         [processor-started-to-created failed to acquire resources for stream
2025-05-01T05:07:13.2556796Z         processor validation: global resource manager returned no resources],
2025-05-01T05:07:13.2557228Z         BadRequestDetail: 
2025-05-01T05:07:13.2570556Z   
2025-05-01T05:07:13.2571027Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-01T05:07:13.2571571Z         
2025-05-01T05:07:13.2571852Z         Error: error deleting resource
2025-05-01T05:07:13.2572122Z         
2025-05-01T05:07:13.2573082Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6812fdf713d6b32170fea898/streams/test-acc-tf-2436475475427371968--STARTED-CREATED/connections/sample_stream_solar
2025-05-01T05:07:13.2573916Z         DELETE: HTTP 403 Forbidden (Error code:
2025-05-01T05:07:13.2574448Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-05-01T05:07:13.2575102Z         name test-acc-tf-2436475475427371968--STARTED-CREATED has active processors,
2025-05-01T05:07:13.2575649Z         and cannot be changed. Reason: Forbidden. Params:
2025-05-01T05:07:13.2576204Z         [test-acc-tf-2436475475427371968--STARTED-CREATED], BadRequestDetail: 
2025-05-01T05:07:13.2592889Z    test_working_directory=/tmp/plugintest1790445626 test_step_number=1
2025-05-01T05:07:13.2623648Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated (3.61s)
```
#### FAIL 5 seconds
```
2025-05-01T06:33:58.4472339Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-05-01T06:33:58.4473016Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STARTED to CREATED state
2025-05-01T06:33:58.4474695Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-05-01T06:33:58.4537131Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-05-01T06:33:58.4537710Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-05-01T06:33:58.4538071Z         
2025-05-01T06:33:58.4538338Z         Error: error creating resource
2025-05-01T06:33:58.4538596Z         
2025-05-01T06:33:58.4538951Z           with mongodbatlas_stream_processor.processor,
2025-05-01T06:33:58.4539625Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-05-01T06:33:58.4540255Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-05-01T06:33:58.4540573Z         
2025-05-01T06:33:58.4541504Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6813128813d6b32170ff097d/streams/test-acc-tf-8195202580927084488--STARTED-CREATED/processor
2025-05-01T06:33:58.4542375Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-05-01T06:33:58.4543285Z         Detail: Streams Processor with this name (processor-started-to-created) had a
2025-05-01T06:33:58.4543972Z         problem occur: failed to acquire resources for stream processor validation:
2025-05-01T06:33:58.4544610Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-05-01T06:33:58.4545242Z         [processor-started-to-created failed to acquire resources for stream
2025-05-01T06:33:58.4545850Z         processor validation: global resource manager returned no resources],
2025-05-01T06:33:58.4546260Z         BadRequestDetail: 
2025-05-01T06:33:58.4559519Z   
2025-05-01T06:33:58.4559971Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-01T06:33:58.4560398Z         
2025-05-01T06:33:58.4560771Z         Error: error deleting resource
2025-05-01T06:33:58.4561034Z         
2025-05-01T06:33:58.4561991Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6813128813d6b32170ff097d/streams/test-acc-tf-8195202580927084488--STARTED-CREATED/connections/sample_stream_solar
2025-05-01T06:33:58.4562807Z         DELETE: HTTP 403 Forbidden (Error code:
2025-05-01T06:33:58.4563329Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-05-01T06:33:58.4563979Z         name test-acc-tf-8195202580927084488--STARTED-CREATED has active processors,
2025-05-01T06:33:58.4564510Z         and cannot be changed. Reason: Forbidden. Params:
2025-05-01T06:33:58.4565057Z         [test-acc-tf-8195202580927084488--STARTED-CREATED], BadRequestDetail: 
2025-05-01T06:33:58.4569655Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated (5.60s)
```
#### FAIL 3 seconds
```
2025-05-01T08:00:42.5375517Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-05-01T08:00:42.5376208Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STARTED to CREATED state
2025-05-01T08:00:42.5377916Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-05-01T08:00:42.5395852Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-05-01T08:00:42.5396576Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-05-01T08:00:42.5396959Z         
2025-05-01T08:00:42.5397251Z         Error: error creating resource
2025-05-01T08:00:42.5397528Z         
2025-05-01T08:00:42.5397902Z           with mongodbatlas_stream_processor.processor,
2025-05-01T08:00:42.5398610Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-05-01T08:00:42.5399258Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-05-01T08:00:42.5399598Z         
2025-05-01T08:00:42.5400452Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68132633f7db2d257067890c/streams/test-acc-tf-7928863222933057686--STARTED-CREATED/processor
2025-05-01T08:00:42.5401340Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-05-01T08:00:42.5402161Z         Detail: Streams Processor with this name (processor-started-to-created) had a
2025-05-01T08:00:42.5402840Z         problem occur: failed to acquire resources for stream processor validation:
2025-05-01T08:00:42.5403496Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-05-01T08:00:42.5404133Z         [processor-started-to-created failed to acquire resources for stream
2025-05-01T08:00:42.5404906Z         processor validation: global resource manager returned no resources],
2025-05-01T08:00:42.5405335Z         BadRequestDetail: 
2025-05-01T08:00:42.5418936Z    test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-05-01T08:00:42.5419650Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-01T08:00:42.5420089Z         
2025-05-01T08:00:42.5420378Z         Error: error deleting resource
2025-05-01T08:00:42.5420752Z         
2025-05-01T08:00:42.5421890Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68132633f7db2d257067890c/streams/test-acc-tf-7928863222933057686--STARTED-CREATED/connections/sample_stream_solar
2025-05-01T08:00:42.5422886Z         DELETE: HTTP 403 Forbidden (Error code:
2025-05-01T08:00:42.5423444Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-05-01T08:00:42.5424110Z         name test-acc-tf-7928863222933057686--STARTED-CREATED has active processors,
2025-05-01T08:00:42.5424667Z         and cannot be changed. Reason: Forbidden. Params:
2025-05-01T08:00:42.5425225Z         [test-acc-tf-7928863222933057686--STARTED-CREATED], BadRequestDetail: 
2025-05-01T08:00:42.5441787Z    test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated test_terraform_path=/home/runner/work/_temp/9c737af5-02ca-48a0-8b01-3b29572d16bb/terraform test_working_directory=/tmp/plugintest1960341955
2025-05-01T08:00:42.5519525Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated (3.28s)
```
#### PASS 7 seconds
### 2025-05-02
#### FAIL 3 seconds
```
2025-05-02T00:45:00.6573868Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-05-02T00:45:00.6574554Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STARTED to CREATED state
2025-05-02T00:45:00.6576376Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-05-02T00:45:00.6594018Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-05-02T00:45:00.6594616Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-05-02T00:45:00.6594985Z         
2025-05-02T00:45:00.6595275Z         Error: error creating resource
2025-05-02T00:45:00.6595557Z         
2025-05-02T00:45:00.6595925Z           with mongodbatlas_stream_processor.processor,
2025-05-02T00:45:00.6596627Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-05-02T00:45:00.6597278Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-05-02T00:45:00.6597613Z         
2025-05-02T00:45:00.6598473Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68141187555db3353e4cc5a7/streams/test-acc-tf-1235547249064817423--STARTED-CREATED/processor
2025-05-02T00:45:00.6599481Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-05-02T00:45:00.6600155Z         Detail: Streams Processor with this name (processor-started-to-created) had a
2025-05-02T00:45:00.6600827Z         problem occur: failed to acquire resources for stream processor validation:
2025-05-02T00:45:00.6601479Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-05-02T00:45:00.6602123Z         [processor-started-to-created failed to acquire resources for stream
2025-05-02T00:45:00.6602882Z         processor validation: global resource manager returned no resources],
2025-05-02T00:45:00.6603319Z         BadRequestDetail: 
2025-05-02T00:45:00.6616630Z   
2025-05-02T00:45:00.6617104Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-02T00:45:00.6617544Z         
2025-05-02T00:45:00.6617834Z         Error: error deleting resource
2025-05-02T00:45:00.6618115Z         
2025-05-02T00:45:00.6619101Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68141187555db3353e4cc5a7/streams/test-acc-tf-1235547249064817423--STARTED-CREATED/connections/sample_stream_solar
2025-05-02T00:45:00.6619937Z         DELETE: HTTP 403 Forbidden (Error code:
2025-05-02T00:45:00.6620496Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-05-02T00:45:00.6621159Z         name test-acc-tf-1235547249064817423--STARTED-CREATED has active processors,
2025-05-02T00:45:00.6621720Z         and cannot be changed. Reason: Forbidden. Params:
2025-05-02T00:45:00.6622402Z         [test-acc-tf-1235547249064817423--STARTED-CREATED], BadRequestDetail: 
2025-05-02T00:45:00.6638644Z    test_step_number=1 test_terraform_path=/home/runner/work/_temp/befba30b-3dc6-43af-9dea-2a5e9457ecc7/terraform test_working_directory=/tmp/plugintest1319911332
2025-05-02T00:45:00.6715406Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated (3.40s)
```
### 2025-05-03
#### FAIL 4 seconds
```
2025-05-03T00:44:49.1528681Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-05-03T00:44:49.1529375Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STARTED to CREATED state
2025-05-03T00:44:49.1531199Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-05-03T00:44:49.1595184Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-05-03T00:44:49.1595778Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-05-03T00:44:49.1596148Z         
2025-05-03T00:44:49.1596427Z         Error: error creating resource
2025-05-03T00:44:49.1596693Z         
2025-05-03T00:44:49.1597065Z           with mongodbatlas_stream_processor.processor,
2025-05-03T00:44:49.1597863Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-05-03T00:44:49.1598503Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-05-03T00:44:49.1598833Z         
2025-05-03T00:44:49.1599683Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/681562e9f5ab983d4a763d13/streams/test-acc-tf-3575101804179150102--STARTED-CREATED/processor
2025-05-03T00:44:49.1600586Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-05-03T00:44:49.1601239Z         Detail: Streams Processor with this name (processor-started-to-created) had a
2025-05-03T00:44:49.1601904Z         problem occur: failed to acquire resources for stream processor validation:
2025-05-03T00:44:49.1602558Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-05-03T00:44:49.1603191Z         [processor-started-to-created failed to acquire resources for stream
2025-05-03T00:44:49.1603820Z         processor validation: global resource manager returned no resources],
2025-05-03T00:44:49.1604242Z         BadRequestDetail: 
2025-05-03T00:44:49.1616982Z    test_terraform_path=/home/runner/work/_temp/3fe48273-6e42-4737-b419-67f5cd49f308/terraform test_working_directory=/tmp/plugintest82846911 test_step_number=1 test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-05-03T00:44:49.1618411Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-03T00:44:49.1618843Z         
2025-05-03T00:44:49.1619161Z         Error: error deleting resource
2025-05-03T00:44:49.1619449Z         
2025-05-03T00:44:49.1620443Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/681562e9f5ab983d4a763d13/streams/test-acc-tf-3575101804179150102--STARTED-CREATED/connections/sample_stream_solar
2025-05-03T00:44:49.1621282Z         DELETE: HTTP 403 Forbidden (Error code:
2025-05-03T00:44:49.1621818Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-05-03T00:44:49.1622477Z         name test-acc-tf-3575101804179150102--STARTED-CREATED has active processors,
2025-05-03T00:44:49.1623014Z         and cannot be changed. Reason: Forbidden. Params:
2025-05-03T00:44:49.1623571Z         [test-acc-tf-3575101804179150102--STARTED-CREATED], BadRequestDetail: 
2025-05-03T00:44:49.1639911Z    test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated test_terraform_path=/home/runner/work/_temp/3fe48273-6e42-4737-b419-67f5cd49f308/terraform test_working_directory=/tmp/plugintest700812596 test_step_number=1
2025-05-03T00:44:49.1671942Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated (4.07s)
```
### 2025-05-04
#### FAIL 5 seconds
```
2025-05-04T00:47:22.2332389Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-05-04T00:47:22.2333061Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STARTED to CREATED state
2025-05-04T00:47:22.2334842Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-05-04T00:47:22.2382523Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-05-04T00:47:22.2383148Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-05-04T00:47:22.2383626Z         
2025-05-04T00:47:22.2383902Z         Error: error creating resource
2025-05-04T00:47:22.2384272Z         
2025-05-04T00:47:22.2384638Z           with mongodbatlas_stream_processor.processor,
2025-05-04T00:47:22.2385456Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-05-04T00:47:22.2386202Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-05-04T00:47:22.2386589Z         
2025-05-04T00:47:22.2387747Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6816b5455763026acc2882c0/streams/test-acc-tf-7232650306331916244--STARTED-CREATED/processor
2025-05-04T00:47:22.2388737Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-05-04T00:47:22.2389501Z         Detail: Streams Processor with this name (processor-started-to-created) had a
2025-05-04T00:47:22.2390271Z         problem occur: failed to acquire resources for stream processor validation:
2025-05-04T00:47:22.2391032Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-05-04T00:47:22.2391872Z         [processor-started-to-created failed to acquire resources for stream
2025-05-04T00:47:22.2392614Z         processor validation: global resource manager returned no resources],
2025-05-04T00:47:22.2393039Z         BadRequestDetail: 
2025-05-04T00:47:22.2410229Z    test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-05-04T00:47:22.2453450Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-05-04T00:47:22.2454234Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-04T00:47:22.2454701Z         
2025-05-04T00:47:22.2454980Z         Error: error deleting resource
2025-05-04T00:47:22.2455243Z         
2025-05-04T00:47:22.2456202Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6816b5455763026acc2882c0/streams/test-acc-tf-7232650306331916244--STARTED-CREATED/connections/sample_stream_solar
2025-05-04T00:47:22.2457012Z         DELETE: HTTP 403 Forbidden (Error code:
2025-05-04T00:47:22.2457539Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-05-04T00:47:22.2458185Z         name test-acc-tf-7232650306331916244--STARTED-CREATED has active processors,
2025-05-04T00:47:22.2458736Z         and cannot be changed. Reason: Forbidden. Params:
2025-05-04T00:47:22.2459282Z         [test-acc-tf-7232650306331916244--STARTED-CREATED], BadRequestDetail: 
2025-05-04T00:47:22.2472625Z   
2025-05-04T00:47:22.2480634Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated (5.80s)
```
### 2025-05-05
#### FAIL 3 seconds
```
2025-05-05T00:44:15.7594712Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-05-05T00:44:15.7595392Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STARTED to CREATED state
2025-05-05T00:44:15.7597074Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-05-05T00:44:15.7660518Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-05-05T00:44:15.7661292Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-05-05T00:44:15.7661660Z         
2025-05-05T00:44:15.7661943Z         Error: error creating resource
2025-05-05T00:44:15.7662216Z         
2025-05-05T00:44:15.7662581Z           with mongodbatlas_stream_processor.processor,
2025-05-05T00:44:15.7663266Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-05-05T00:44:15.7663900Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-05-05T00:44:15.7664231Z         
2025-05-05T00:44:15.7665080Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6818067f815eb7429e02a9d7/streams/test-acc-tf-3721990347952763160--STARTED-CREATED/processor
2025-05-05T00:44:15.7665988Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-05-05T00:44:15.7666637Z         Detail: Streams Processor with this name (processor-started-to-created) had a
2025-05-05T00:44:15.7667302Z         problem occur: failed to acquire resources for stream processor validation:
2025-05-05T00:44:15.7667939Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-05-05T00:44:15.7668563Z         [processor-started-to-created failed to acquire resources for stream
2025-05-05T00:44:15.7669192Z         processor validation: global resource manager returned no resources],
2025-05-05T00:44:15.7669616Z         BadRequestDetail: 
2025-05-05T00:44:15.7682949Z    test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-05-05T00:44:15.7683645Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-05T00:44:15.7684072Z         
2025-05-05T00:44:15.7684477Z         Error: error deleting resource
2025-05-05T00:44:15.7684745Z         
2025-05-05T00:44:15.7685715Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6818067f815eb7429e02a9d7/streams/test-acc-tf-3721990347952763160--STARTED-CREATED/connections/sample_stream_solar
2025-05-05T00:44:15.7686601Z         DELETE: HTTP 403 Forbidden (Error code:
2025-05-05T00:44:15.7687133Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-05-05T00:44:15.7687787Z         name test-acc-tf-3721990347952763160--STARTED-CREATED has active processors,
2025-05-05T00:44:15.7688330Z         and cannot be changed. Reason: Forbidden. Params:
2025-05-05T00:44:15.7688876Z         [test-acc-tf-3721990347952763160--STARTED-CREATED], BadRequestDetail: 
2025-05-05T00:44:15.7705437Z    test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated test_terraform_path=/home/runner/work/_temp/f4ca3d7f-04d2-457f-82a1-28d798808c42/terraform
2025-05-05T00:44:15.7737684Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated (3.29s)
```
#### FAIL 3 seconds
```
2025-05-05T10:43:53.8867507Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-05-05T10:43:53.8868330Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STARTED to CREATED state
2025-05-05T10:43:53.8870303Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-05-05T10:43:53.8939974Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-05-05T10:43:53.8940564Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-05-05T10:43:53.8940915Z         
2025-05-05T10:43:53.8941190Z         Error: error creating resource
2025-05-05T10:43:53.8941452Z         
2025-05-05T10:43:53.8941808Z           with mongodbatlas_stream_processor.processor,
2025-05-05T10:43:53.8942495Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-05-05T10:43:53.8943128Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-05-05T10:43:53.8943457Z         
2025-05-05T10:43:53.8944298Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/681892fac81731290de3bc4e/streams/test-acc-tf-1835964215111625619--STARTED-CREATED/processor
2025-05-05T10:43:53.8945180Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-05-05T10:43:53.8945833Z         Detail: Streams Processor with this name (processor-started-to-created) had a
2025-05-05T10:43:53.8946612Z         problem occur: failed to acquire resources for stream processor validation:
2025-05-05T10:43:53.8947254Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-05-05T10:43:53.8947874Z         [processor-started-to-created failed to acquire resources for stream
2025-05-05T10:43:53.8948495Z         processor validation: global resource manager returned no resources],
2025-05-05T10:43:53.8948908Z         BadRequestDetail: 
2025-05-05T10:43:53.8962107Z   
2025-05-05T10:43:53.8962578Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-05T10:43:53.8963003Z         
2025-05-05T10:43:53.8963273Z         Error: error deleting resource
2025-05-05T10:43:53.8963546Z         
2025-05-05T10:43:53.8964502Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/681892fac81731290de3bc4e/streams/test-acc-tf-1835964215111625619--STARTED-CREATED/connections/sample_stream_solar
2025-05-05T10:43:53.8965340Z         DELETE: HTTP 403 Forbidden (Error code:
2025-05-05T10:43:53.8966155Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-05-05T10:43:53.8966854Z         name test-acc-tf-1835964215111625619--STARTED-CREATED has active processors,
2025-05-05T10:43:53.8967389Z         and cannot be changed. Reason: Forbidden. Params:
2025-05-05T10:43:53.8967933Z         [test-acc-tf-1835964215111625619--STARTED-CREATED], BadRequestDetail: 
2025-05-05T10:43:53.8984515Z   
2025-05-05T10:43:53.9014953Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated (3.79s)
```
### 2025-05-06
#### FAIL 3 seconds
```
2025-05-06T00:45:47.9931701Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-05-06T00:45:47.9932576Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STARTED to CREATED state
2025-05-06T00:45:47.9934296Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-05-06T00:45:47.9952177Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-05-06T00:45:47.9952774Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-05-06T00:45:47.9953150Z         
2025-05-06T00:45:47.9953435Z         Error: error creating resource
2025-05-06T00:45:47.9953715Z         
2025-05-06T00:45:47.9954077Z           with mongodbatlas_stream_processor.processor,
2025-05-06T00:45:47.9954768Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-05-06T00:45:47.9955406Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-05-06T00:45:47.9955734Z         
2025-05-06T00:45:47.9956839Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/681957ac672b3b2681c56cbd/streams/test-acc-tf-772752587867531460--STARTED-CREATED/processor
2025-05-06T00:45:47.9957733Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-05-06T00:45:47.9958391Z         Detail: Streams Processor with this name (processor-started-to-created) had a
2025-05-06T00:45:47.9959064Z         problem occur: failed to acquire resources for stream processor validation:
2025-05-06T00:45:47.9959710Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-05-06T00:45:47.9960340Z         [processor-started-to-created failed to acquire resources for stream
2025-05-06T00:45:47.9960953Z         processor validation: global resource manager returned no resources],
2025-05-06T00:45:47.9961377Z         BadRequestDetail: 
2025-05-06T00:45:47.9973974Z    test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated test_terraform_path=/home/runner/work/_temp/d6b206a4-cec5-4f5d-a020-26194b340b1c/terraform test_working_directory=/tmp/plugintest2081929080 test_step_number=1
2025-05-06T00:45:47.9975196Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-06T00:45:47.9975626Z         
2025-05-06T00:45:47.9975898Z         Error: error deleting resource
2025-05-06T00:45:47.9976267Z         
2025-05-06T00:45:47.9977244Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/681957ac672b3b2681c56cbd/streams/test-acc-tf-772752587867531460--STARTED-CREATED/connections/sample_stream_solar
2025-05-06T00:45:47.9978188Z         DELETE: HTTP 403 Forbidden (Error code:
2025-05-06T00:45:47.9978944Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-05-06T00:45:47.9979764Z         name test-acc-tf-772752587867531460--STARTED-CREATED has active processors,
2025-05-06T00:45:47.9980521Z         and cannot be changed. Reason: Forbidden. Params:
2025-05-06T00:45:47.9981214Z         [test-acc-tf-772752587867531460--STARTED-CREATED], BadRequestDetail: 
2025-05-06T00:45:48.0000973Z   
2025-05-06T00:45:48.0037160Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated (3.75s)
```
### 2025-05-07
#### FAIL 4 seconds
```
2025-05-07T00:45:41.7464452Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-05-07T00:45:41.7465131Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STARTED to CREATED state
2025-05-07T00:45:41.7466817Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-05-07T00:45:41.7484906Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-05-07T00:45:41.7485502Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-05-07T00:45:41.7485872Z         
2025-05-07T00:45:41.7486145Z         Error: error creating resource
2025-05-07T00:45:41.7486417Z         
2025-05-07T00:45:41.7486776Z           with mongodbatlas_stream_processor.processor,
2025-05-07T00:45:41.7487629Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-05-07T00:45:41.7488264Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-05-07T00:45:41.7488587Z         
2025-05-07T00:45:41.7489427Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/681aa92812a00e698e01576f/streams/test-acc-tf-2183599527261212288--STARTED-CREATED/processor
2025-05-07T00:45:41.7490300Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-05-07T00:45:41.7490945Z         Detail: Streams Processor with this name (processor-started-to-created) had a
2025-05-07T00:45:41.7491725Z         problem occur: failed to acquire resources for stream processor validation:
2025-05-07T00:45:41.7492380Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-05-07T00:45:41.7493008Z         [processor-started-to-created failed to acquire resources for stream
2025-05-07T00:45:41.7493616Z         processor validation: global resource manager returned no resources],
2025-05-07T00:45:41.7494035Z         BadRequestDetail: 
2025-05-07T00:45:41.7508078Z   
2025-05-07T00:45:41.7508564Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-07T00:45:41.7509003Z         
2025-05-07T00:45:41.7509279Z         Error: error deleting resource
2025-05-07T00:45:41.7509553Z         
2025-05-07T00:45:41.7510515Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/681aa92812a00e698e01576f/streams/test-acc-tf-2183599527261212288--STARTED-CREATED/connections/sample_stream_solar
2025-05-07T00:45:41.7511346Z         DELETE: HTTP 403 Forbidden (Error code:
2025-05-07T00:45:41.7511879Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-05-07T00:45:41.7512522Z         name test-acc-tf-2183599527261212288--STARTED-CREATED has active processors,
2025-05-07T00:45:41.7513055Z         and cannot be changed. Reason: Forbidden. Params:
2025-05-07T00:45:41.7513601Z         [test-acc-tf-2183599527261212288--STARTED-CREATED], BadRequestDetail: 
2025-05-07T00:45:41.7520401Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated (4.45s)
```
#### FAIL 4 seconds
```
2025-05-07T18:55:22.1210447Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-05-07T18:55:22.1211147Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STARTED to CREATED state
2025-05-07T18:55:22.1212804Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-05-07T18:55:22.1234627Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-05-07T18:55:22.1235242Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-05-07T18:55:22.1235612Z         
2025-05-07T18:55:22.1235898Z         Error: error creating resource
2025-05-07T18:55:22.1236177Z         
2025-05-07T18:55:22.1236559Z           with mongodbatlas_stream_processor.processor,
2025-05-07T18:55:22.1237286Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-05-07T18:55:22.1238107Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-05-07T18:55:22.1238435Z         
2025-05-07T18:55:22.1239328Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/681ba96d574ca84ab1e763b8/streams/test-acc-tf-3488433303999785032--STARTED-CREATED/processor
2025-05-07T18:55:22.1240228Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-05-07T18:55:22.1241031Z         Detail: Streams Processor with this name (processor-started-to-created) had a
2025-05-07T18:55:22.1241719Z         problem occur: failed to acquire resources for stream processor validation:
2025-05-07T18:55:22.1242378Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-05-07T18:55:22.1243024Z         [processor-started-to-created failed to acquire resources for stream
2025-05-07T18:55:22.1243667Z         processor validation: global resource manager returned no resources],
2025-05-07T18:55:22.1244091Z         BadRequestDetail: 
2025-05-07T18:55:22.1257499Z   
2025-05-07T18:55:22.1258143Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-07T18:55:22.1258574Z         
2025-05-07T18:55:22.1258855Z         Error: error deleting resource
2025-05-07T18:55:22.1259123Z         
2025-05-07T18:55:22.1260142Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/681ba96d574ca84ab1e763b8/streams/test-acc-tf-3488433303999785032--STARTED-CREATED/connections/sample_stream_solar
2025-05-07T18:55:22.1260985Z         DELETE: HTTP 403 Forbidden (Error code:
2025-05-07T18:55:22.1261543Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-05-07T18:55:22.1262210Z         name test-acc-tf-3488433303999785032--STARTED-CREATED has active processors,
2025-05-07T18:55:22.1262762Z         and cannot be changed. Reason: Forbidden. Params:
2025-05-07T18:55:22.1263330Z         [test-acc-tf-3488433303999785032--STARTED-CREATED], BadRequestDetail: 
2025-05-07T18:55:22.1267279Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated (4.97s)
```
#### FAIL 4 seconds
```
2025-05-07T19:17:21.2120077Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-05-07T19:17:21.2120985Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STARTED to CREATED state
2025-05-07T19:17:21.2123203Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-05-07T19:17:21.2192561Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-05-07T19:17:21.2193177Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-05-07T19:17:21.2193537Z         
2025-05-07T19:17:21.2193813Z         Error: error creating resource
2025-05-07T19:17:21.2194080Z         
2025-05-07T19:17:21.2194429Z           with mongodbatlas_stream_processor.processor,
2025-05-07T19:17:21.2195113Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-05-07T19:17:21.2195742Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-05-07T19:17:21.2196074Z         
2025-05-07T19:17:21.2197036Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/681badd2574ca84ab1e767b1/streams/test-acc-tf-5481116428558004012--STARTED-CREATED/processor
2025-05-07T19:17:21.2197937Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-05-07T19:17:21.2198584Z         Detail: Streams Processor with this name (processor-started-to-created) had a
2025-05-07T19:17:21.2199245Z         problem occur: failed to acquire resources for stream processor validation:
2025-05-07T19:17:21.2199880Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-05-07T19:17:21.2200500Z         [processor-started-to-created failed to acquire resources for stream
2025-05-07T19:17:21.2201109Z         processor validation: global resource manager returned no resources],
2025-05-07T19:17:21.2201532Z         BadRequestDetail: 
2025-05-07T19:17:21.2214420Z    test_terraform_path=/home/runner/work/_temp/5d780d25-155a-4aaf-bf1a-dbeb8b42acc9/terraform test_working_directory=/tmp/plugintest1303380958 test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated test_step_number=1
2025-05-07T19:17:21.2215647Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-07T19:17:21.2216084Z         
2025-05-07T19:17:21.2216352Z         Error: error deleting resource
2025-05-07T19:17:21.2216620Z         
2025-05-07T19:17:21.2217582Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/681badd2574ca84ab1e767b1/streams/test-acc-tf-5481116428558004012--STARTED-CREATED/connections/sample_stream_solar
2025-05-07T19:17:21.2218418Z         DELETE: HTTP 403 Forbidden (Error code:
2025-05-07T19:17:21.2218948Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-05-07T19:17:21.2219589Z         name test-acc-tf-5481116428558004012--STARTED-CREATED has active processors,
2025-05-07T19:17:21.2220133Z         and cannot be changed. Reason: Forbidden. Params:
2025-05-07T19:17:21.2220678Z         [test-acc-tf-5481116428558004012--STARTED-CREATED], BadRequestDetail: 
2025-05-07T19:17:21.2222809Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated (4.27s)
```
#### PASS 8 seconds
### 2025-05-08
#### PASS 9 seconds
### 2025-05-09
#### PASS 8 seconds
### 2025-05-10
#### PASS 6 seconds
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:30:00.1137060Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-05-11T00:30:00.1137822Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STARTED to CREATED state
2025-05-11T00:30:00.1138509Z     resource_test.go:251: Creating execution project: test-acc-tf-p-1600038539823515889
2025-05-11T00:30:00.1138960Z     resource_test.go:251: 
2025-05-11T00:30:00.1139846Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:00.1142410Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:30:00.1145834Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:352
2025-05-11T00:30:00.1149455Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:251
2025-05-11T00:30:00.1150260Z         	Error:      	Received unexpected error:
2025-05-11T00:30:00.1151156Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:00.1152083Z         	Test:       	TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-05-11T00:30:00.1153257Z         	Messages:   	Project creation failed: test-acc-tf-p-1600038539823515889, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:00.1156071Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated (0.02s)
```
### 2025-05-12
#### PASS 8 seconds
### 2025-05-13
#### PASS 7 seconds
#### PASS 6 seconds
### 2025-05-14
#### PASS 7 seconds
### 2025-05-15
#### PASS 7 seconds
### 2025-05-16
#### PASS 6 seconds
### 2025-05-17
#### PASS 6 seconds
### 2025-05-18
#### PASS 9 seconds
### 2025-05-19
#### PASS 8 seconds
### 2025-05-20
#### PASS 7 seconds
#### PASS 9 seconds
### 2025-05-21
#### PASS 8 seconds
### 2025-05-22
#### PASS 8 seconds
#### PASS 8 seconds
#### PASS 7 seconds
### 2025-05-23
#### FAIL 2 seconds
```
2025-05-23T00:49:48.7968901Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-05-23T00:49:48.7969594Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STARTED to CREATED state
2025-05-23T00:49:48.7971305Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-05-23T00:49:48.7989061Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-05-23T00:49:48.7989653Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-05-23T00:49:48.7990021Z         
2025-05-23T00:49:48.7990300Z         Error: error creating resource
2025-05-23T00:49:48.7990582Z         
2025-05-23T00:49:48.7990942Z           with mongodbatlas_stream_processor.processor,
2025-05-23T00:49:48.7991640Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-05-23T00:49:48.7992291Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-05-23T00:49:48.7992623Z         
2025-05-23T00:49:48.7993577Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/682fc1361fcba3225667ae39/streams/test-acc-tf-704508028904772120--STARTED-CREATED/processor
2025-05-23T00:49:48.7994476Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-05-23T00:49:48.7995130Z         Detail: Streams Processor with this name (processor-started-to-created) had a
2025-05-23T00:49:48.7995795Z         problem occur: failed to acquire resources for stream processor validation:
2025-05-23T00:49:48.7996445Z         global resource manager returned no resources. Reason: Bad Request. Params:
2025-05-23T00:49:48.7997086Z         [processor-started-to-created failed to acquire resources for stream
2025-05-23T00:49:48.7997829Z         processor validation: global resource manager returned no resources],
2025-05-23T00:49:48.7998279Z         BadRequestDetail: 
2025-05-23T00:49:48.8011713Z   
2025-05-23T00:49:48.8012178Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-23T00:49:48.8012619Z         
2025-05-23T00:49:48.8012897Z         Error: error deleting resource
2025-05-23T00:49:48.8013175Z         
2025-05-23T00:49:48.8014230Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/682fc1361fcba3225667ae39/streams/test-acc-tf-704508028904772120--STARTED-CREATED/connections/sample_stream_solar
2025-05-23T00:49:48.8015064Z         DELETE: HTTP 403 Forbidden (Error code:
2025-05-23T00:49:48.8015603Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-05-23T00:49:48.8016251Z         name test-acc-tf-704508028904772120--STARTED-CREATED has active processors,
2025-05-23T00:49:48.8016801Z         and cannot be changed. Reason: Forbidden. Params:
2025-05-23T00:49:48.8017349Z         [test-acc-tf-704508028904772120--STARTED-CREATED], BadRequestDetail: 
2025-05-23T00:49:48.8033476Z    test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped test_terraform_path=/home/runner/work/_temp/ff69557a-791e-4b49-8991-15a455b1be89/terraform test_working_directory=/tmp/plugintest2222245470 test_step_number=1
2025-05-23T00:49:48.8127443Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated (2.76s)
```
### 2025-05-24
#### PASS 7 seconds
### 2025-05-25
#### PASS 7 seconds
### 2025-05-26
#### PASS 9 seconds
### 2025-05-27
#### PASS 7 seconds
#### PASS 7 seconds
### 2025-05-28
#### PASS 9 seconds
#### PASS 7 seconds
### 2025-05-29
#### PASS 7 seconds
#### PASS 9 seconds
### 2025-05-30
#### PASS 6 seconds
#### PASS 9 seconds
### 2025-05-31
#### PASS 7 seconds
### 2025-06-01
#### PASS 8 seconds
#### PASS 7 seconds
#### PASS 7 seconds
#### PASS 7 seconds
#### PASS 9 seconds
#### PASS 7 seconds
#### PASS 7 seconds
### 2025-06-02
#### PASS 9 seconds
#### PASS 9 seconds
#### PASS 6 seconds
### 2025-06-03
#### PASS 7 seconds
#### PASS 8 seconds
#### PASS 7 seconds
### 2025-06-04
#### PASS 9 seconds
### 2025-06-05
#### PASS 7 seconds
### 2025-06-06
#### PASS 7 seconds
### 2025-06-07
#### PASS 6 seconds
### 2025-06-08
#### PASS 7 seconds
### 2025-06-09
#### PASS 7 seconds
### 2025-06-10
#### PASS 9 seconds
### 2025-06-11
#### PASS 6 seconds
#### PASS 8 seconds
### 2025-06-12
#### PASS 8 seconds
### 2025-06-13
#### PASS 9 seconds
### 2025-06-14
#### PASS 8 seconds
### 2025-06-15
#### PASS 9 seconds
### 2025-06-16
#### PASS 6 seconds
### 2025-06-17
#### PASS 6 seconds
### 2025-06-18
#### PASS 8 seconds
#### PASS 8 seconds
### 2025-06-19
#### PASS 6 seconds
### 2025-06-20
#### PASS 7 seconds
### 2025-06-21
#### PASS 7 seconds
### 2025-06-22
#### PASS 8 seconds
### 2025-06-23
#### PASS 10 seconds
### 2025-06-24
#### PASS 6 seconds
### 2025-06-25
#### PASS 7 seconds
#### PASS 7 seconds
### 2025-06-26
#### PASS 7 seconds
#### PASS 7 seconds
### 2025-06-27
#### PASS 7 seconds
### 2025-06-28
#### PASS 9 seconds
### 2025-06-29
#### PASS 7 seconds
### 2025-06-30
#### PASS 9 seconds
### 2025-07-01
#### PASS 9 seconds
#### PASS 7 seconds
#### PASS 9 seconds
#### PASS 7 seconds
#### PASS 9 seconds
#### PASS 9 seconds
#### PASS 7 seconds
#### PASS 8 seconds
### 2025-07-02
#### FAIL 31 seconds
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-07-02T00:46:31.926000+00:00-TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated',confidence=1.0,ts_when='6 days ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-07-02T00:46:31.9269863Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-07-02T00:46:31.9270548Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STARTED to CREATED state
2025-07-02T00:46:31.9272568Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-07-02T00:46:31.9296802Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-07-02T00:46:31.9297401Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-07-02T00:46:31.9297755Z         
2025-07-02T00:46:31.9298025Z         Error: error creating resource
2025-07-02T00:46:31.9298293Z         
2025-07-02T00:46:31.9298641Z           with mongodbatlas_stream_processor.processor,
2025-07-02T00:46:31.9299321Z           on terraform_plugin_test.tf line 31, in resource "mongodbatlas_stream_processor" "processor":
2025-07-02T00:46:31.9299950Z           31: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-02T00:46:31.9300278Z         
2025-07-02T00:46:31.9301121Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68647d45ef5b3c2f1ae5eb8b/streams/test-acc-tf-6430886400769056754--STARTED-CREATED/processor
2025-07-02T00:46:31.9302232Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-02T00:46:31.9302882Z         Detail: Streams Processor with this name (processor-started-to-created) had a
2025-07-02T00:46:31.9303551Z         problem occur: failed to acquire resources for stream processor validation:
2025-07-02T00:46:31.9304180Z         internal error while provisioning resource from global resource manager.
2025-07-02T00:46:31.9304823Z         Reason: Bad Request. Params: [processor-started-to-created failed to acquire
2025-07-02T00:46:31.9305476Z         resources for stream processor validation: internal error while provisioning
2025-07-02T00:46:31.9306048Z         resource from global resource manager], BadRequestDetail: 
2025-07-02T00:46:31.9320078Z    test_terraform_path=/home/runner/work/_temp/562e13ef-6059-4fe1-8ce4-2da40aa0a837/terraform test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated test_working_directory=/tmp/plugintest220322980 test_step_number=1
2025-07-02T00:46:31.9321328Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-02T00:46:31.9321908Z         
2025-07-02T00:46:31.9322182Z         Error: error deleting resource
2025-07-02T00:46:31.9322446Z         
2025-07-02T00:46:31.9323416Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68647d45ef5b3c2f1ae5eb8b/streams/test-acc-tf-6430886400769056754--STARTED-CREATED/connections/sample_stream_solar
2025-07-02T00:46:31.9324257Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-02T00:46:31.9324794Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-02T00:46:31.9325471Z         name test-acc-tf-6430886400769056754--STARTED-CREATED has active processors,
2025-07-02T00:46:31.9326025Z         and cannot be changed. Reason: Forbidden. Params:
2025-07-02T00:46:31.9326575Z         [test-acc-tf-6430886400769056754--STARTED-CREATED], BadRequestDetail: 
2025-07-02T00:46:31.9329124Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated (31.08s)
```
### 2025-07-03
#### FAIL 31 seconds
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-07-03T00:46:39.964000+00:00-TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated',confidence=1.0,ts_when='6 days ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-07-03T00:46:39.9647034Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-07-03T00:46:39.9647700Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STARTED to CREATED state
2025-07-03T00:46:39.9649484Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-07-03T00:46:39.9674495Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-07-03T00:46:39.9675069Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-07-03T00:46:39.9675535Z         
2025-07-03T00:46:39.9675806Z         Error: error creating resource
2025-07-03T00:46:39.9676064Z         
2025-07-03T00:46:39.9676418Z           with mongodbatlas_stream_processor.processor,
2025-07-03T00:46:39.9677089Z           on terraform_plugin_test.tf line 31, in resource "mongodbatlas_stream_processor" "processor":
2025-07-03T00:46:39.9677737Z           31: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-03T00:46:39.9678069Z         
2025-07-03T00:46:39.9678896Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6865cef1699daf2aab4cc130/streams/test-acc-tf-6776327642991085805--STARTED-CREATED/processor
2025-07-03T00:46:39.9679767Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-03T00:46:39.9680399Z         Detail: Streams Processor with this name (processor-started-to-created) had a
2025-07-03T00:46:39.9681054Z         problem occur: failed to acquire resources for stream processor validation:
2025-07-03T00:46:39.9681668Z         internal error while provisioning resource from global resource manager.
2025-07-03T00:46:39.9682299Z         Reason: Bad Request. Params: [processor-started-to-created failed to acquire
2025-07-03T00:46:39.9682943Z         resources for stream processor validation: internal error while provisioning
2025-07-03T00:46:39.9683512Z         resource from global resource manager], BadRequestDetail: 
2025-07-03T00:46:39.9693061Z    test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped test_terraform_path=/home/runner/work/_temp/ef39a757-d25f-4082-b21a-dc72cb293981/terraform
2025-07-03T00:46:39.9762968Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-07-03T00:46:39.9763632Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-03T00:46:39.9764057Z         
2025-07-03T00:46:39.9764324Z         Error: error deleting resource
2025-07-03T00:46:39.9764585Z         
2025-07-03T00:46:39.9765746Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6865cef1699daf2aab4cc130/streams/test-acc-tf-6776327642991085805--STARTED-CREATED/connections/sample_stream_solar
2025-07-03T00:46:39.9766577Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-03T00:46:39.9767099Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-03T00:46:39.9768100Z         name test-acc-tf-6776327642991085805--STARTED-CREATED has active processors,
2025-07-03T00:46:39.9768789Z         and cannot be changed. Reason: Forbidden. Params:
2025-07-03T00:46:39.9769344Z         [test-acc-tf-6776327642991085805--STARTED-CREATED], BadRequestDetail: 
2025-07-03T00:46:39.9782145Z    test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2025-07-03T00:46:39.9790584Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated (31.28s)
```
### 2025-07-04
#### FAIL 31 seconds
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-07-04T00:51:07.714000+00:00-TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated',confidence=1.0,ts_when='4 days ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-07-04T00:51:07.7146470Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-07-04T00:51:07.7147168Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STARTED to CREATED state
2025-07-04T00:51:07.7149293Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-07-04T00:51:07.7171876Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-07-04T00:51:07.7172578Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-07-04T00:51:07.7172950Z         
2025-07-04T00:51:07.7173328Z         Error: error creating resource
2025-07-04T00:51:07.7173602Z         
2025-07-04T00:51:07.7174054Z           with mongodbatlas_stream_processor.processor,
2025-07-04T00:51:07.7174836Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-07-04T00:51:07.7175750Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-04T00:51:07.7176096Z         
2025-07-04T00:51:07.7177057Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6867204b579d4c1b1e7ac9f7/streams/test-acc-tf-3753323963700127068--STARTED-CREATED/processor
2025-07-04T00:51:07.7178343Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-04T00:51:07.7179125Z         Detail: Streams Processor with this name (processor-started-to-created) had a
2025-07-04T00:51:07.7179898Z         problem occur: failed to acquire resources for stream processor validation:
2025-07-04T00:51:07.7180636Z         internal error while provisioning resource from global resource manager.
2025-07-04T00:51:07.7181377Z         Reason: Bad Request. Params: [processor-started-to-created failed to acquire
2025-07-04T00:51:07.7182147Z         resources for stream processor validation: internal error while provisioning
2025-07-04T00:51:07.7182761Z         resource from global resource manager], BadRequestDetail: 
2025-07-04T00:51:07.7197499Z    test_terraform_path=/home/runner/work/_temp/c3d41cd1-2970-494b-9abe-ad1b88c82e94/terraform test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-07-04T00:51:07.7198757Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-04T00:51:07.7199265Z         
2025-07-04T00:51:07.7199588Z         Error: error deleting resource
2025-07-04T00:51:07.7199923Z         
2025-07-04T00:51:07.7200996Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6867204b579d4c1b1e7ac9f7/streams/test-acc-tf-3753323963700127068--STARTED-CREATED/connections/sample_stream_solar
2025-07-04T00:51:07.7201967Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-04T00:51:07.7202588Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-04T00:51:07.7203353Z         name test-acc-tf-3753323963700127068--STARTED-CREATED has active processors,
2025-07-04T00:51:07.7204157Z         and cannot be changed. Reason: Forbidden. Params:
2025-07-04T00:51:07.7204855Z         [test-acc-tf-3753323963700127068--STARTED-CREATED], BadRequestDetail: 
2025-07-04T00:51:07.7210050Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated (31.04s)
```
### 2025-07-05
#### FAIL 31 seconds
```
2025-07-05T00:44:07.6017934Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-07-05T00:44:07.6019154Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STARTED to CREATED state
2025-07-05T00:44:07.6022112Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-07-05T00:44:07.6059538Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-07-05T00:44:07.6060592Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-07-05T00:44:07.6061209Z         
2025-07-05T00:44:07.6061664Z         Error: error creating resource
2025-07-05T00:44:07.6062107Z         
2025-07-05T00:44:07.6062709Z           with mongodbatlas_stream_processor.processor,
2025-07-05T00:44:07.6064102Z           on terraform_plugin_test.tf line 31, in resource "mongodbatlas_stream_processor" "processor":
2025-07-05T00:44:07.6064866Z           31: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-05T00:44:07.6065193Z         
2025-07-05T00:44:07.6066032Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6868719b37c6036ffcf44dbd/streams/test-acc-tf-5112983405997186349--STARTED-CREATED/processor
2025-07-05T00:44:07.6066895Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-05T00:44:07.6067679Z         Detail: Streams Processor with this name (processor-started-to-created) had a
2025-07-05T00:44:07.6068343Z         problem occur: failed to acquire resources for stream processor validation:
2025-07-05T00:44:07.6068960Z         internal error while provisioning resource from global resource manager.
2025-07-05T00:44:07.6069578Z         Reason: Bad Request. Params: [processor-started-to-created failed to acquire
2025-07-05T00:44:07.6070214Z         resources for stream processor validation: internal error while provisioning
2025-07-05T00:44:07.6070778Z         resource from global resource manager], BadRequestDetail: 
2025-07-05T00:44:07.6088114Z   
2025-07-05T00:44:07.6111097Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-07-05T00:44:07.6111765Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-05T00:44:07.6112180Z         
2025-07-05T00:44:07.6112444Z         Error: error deleting resource
2025-07-05T00:44:07.6112700Z         
2025-07-05T00:44:07.6113644Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6868719b37c6036ffcf44dbd/streams/test-acc-tf-5112983405997186349--STARTED-CREATED/connections/sample_stream_solar
2025-07-05T00:44:07.6114573Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-05T00:44:07.6115083Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-05T00:44:07.6115837Z         name test-acc-tf-5112983405997186349--STARTED-CREATED has active processors,
2025-07-05T00:44:07.6116360Z         and cannot be changed. Reason: Forbidden. Params:
2025-07-05T00:44:07.6116885Z         [test-acc-tf-5112983405997186349--STARTED-CREATED], BadRequestDetail: 
2025-07-05T00:44:07.6129620Z    test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated test_terraform_path=/home/runner/work/_temp/503c00e9-2f1d-4f06-8735-86b25f02f37b/terraform test_working_directory=/tmp/plugintest4287549 test_step_number=1
2025-07-05T00:44:07.6138149Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated (31.50s)
```
### 2025-07-06
#### PASS 13 seconds
### 2025-07-07
#### FAIL 31 seconds
```
2025-07-07T00:48:05.7948028Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-07-07T00:48:05.7948696Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STARTED to CREATED state
2025-07-07T00:48:05.7950334Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-07-07T00:48:05.7995057Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-07-07T00:48:05.7995777Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-07-07T00:48:05.7996170Z         
2025-07-07T00:48:05.7996434Z         Error: error creating resource
2025-07-07T00:48:05.7996697Z         
2025-07-07T00:48:05.7997041Z           with mongodbatlas_stream_processor.processor,
2025-07-07T00:48:05.7997717Z           on terraform_plugin_test.tf line 31, in resource "mongodbatlas_stream_processor" "processor":
2025-07-07T00:48:05.7998342Z           31: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-07T00:48:05.7998657Z         
2025-07-07T00:48:05.7999481Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/686b156affed0c5c678b2a5a/streams/test-acc-tf-4358267423821056890--STARTED-CREATED/processor
2025-07-07T00:48:05.8000342Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-07T00:48:05.8000975Z         Detail: Streams Processor with this name (processor-started-to-created) had a
2025-07-07T00:48:05.8001754Z         problem occur: failed to acquire resources for stream processor validation:
2025-07-07T00:48:05.8002368Z         internal error while provisioning resource from global resource manager.
2025-07-07T00:48:05.8002990Z         Reason: Bad Request. Params: [processor-started-to-created failed to acquire
2025-07-07T00:48:05.8003628Z         resources for stream processor validation: internal error while provisioning
2025-07-07T00:48:05.8004199Z         resource from global resource manager], BadRequestDetail: 
2025-07-07T00:48:05.8021489Z   
2025-07-07T00:48:05.8063875Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-07-07T00:48:05.8064658Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-07T00:48:05.8065080Z         
2025-07-07T00:48:05.8065344Z         Error: error deleting resource
2025-07-07T00:48:05.8065609Z         
2025-07-07T00:48:05.8066721Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/686b156affed0c5c678b2a5a/streams/test-acc-tf-4358267423821056890--STARTED-CREATED/connections/sample_stream_solar
2025-07-07T00:48:05.8067537Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-07T00:48:05.8068063Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-07T00:48:05.8068691Z         name test-acc-tf-4358267423821056890--STARTED-CREATED has active processors,
2025-07-07T00:48:05.8069213Z         and cannot be changed. Reason: Forbidden. Params:
2025-07-07T00:48:05.8069742Z         [test-acc-tf-4358267423821056890--STARTED-CREATED], BadRequestDetail: 
2025-07-07T00:48:05.8082767Z    test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated test_terraform_path=/home/runner/work/_temp/c51b1342-8f8b-48f5-80bd-084902e39212/terraform test_working_directory=/tmp/plugintest1718479075
2025-07-07T00:48:05.8091686Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated (31.12s)
```
### 2025-07-08
#### FAIL 31 seconds
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-07-08T00:45:56.131000+00:00-TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated',confidence=1.0,ts_when='a day ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-07-08T00:45:56.1319529Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-07-08T00:45:56.1320779Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STARTED to CREATED state
2025-07-08T00:45:56.1323816Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-07-08T00:45:56.1405408Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-07-08T00:45:56.1406454Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-07-08T00:45:56.1407066Z         
2025-07-08T00:45:56.1407527Z         Error: error creating resource
2025-07-08T00:45:56.1407993Z         
2025-07-08T00:45:56.1408619Z           with mongodbatlas_stream_processor.processor,
2025-07-08T00:45:56.1409861Z           on terraform_plugin_test.tf line 31, in resource "mongodbatlas_stream_processor" "processor":
2025-07-08T00:45:56.1411025Z           31: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-08T00:45:56.1411579Z         
2025-07-08T00:45:56.1413126Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/686c6668a5ec7701ec2c7a57/streams/test-acc-tf-1610442013165794056--STARTED-CREATED/processor
2025-07-08T00:45:56.1415115Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-08T00:45:56.1416290Z         Detail: Streams Processor with this name (processor-started-to-created) had a
2025-07-08T00:45:56.1417494Z         problem occur: failed to acquire resources for stream processor validation:
2025-07-08T00:45:56.1418641Z         internal error while provisioning resource from global resource manager.
2025-07-08T00:45:56.1419817Z         Reason: Bad Request. Params: [processor-started-to-created failed to acquire
2025-07-08T00:45:56.1421009Z         resources for stream processor validation: internal error while provisioning
2025-07-08T00:45:56.1422047Z         resource from global resource manager], BadRequestDetail: 
2025-07-08T00:45:56.1447718Z   
2025-07-08T00:45:56.1448523Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-08T00:45:56.1449250Z         
2025-07-08T00:45:56.1449707Z         Error: error deleting resource
2025-07-08T00:45:56.1450144Z         
2025-07-08T00:45:56.1451924Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/686c6668a5ec7701ec2c7a57/streams/test-acc-tf-1610442013165794056--STARTED-CREATED/connections/sample_stream_solar
2025-07-08T00:45:56.1453384Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-08T00:45:56.1454326Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-08T00:45:56.1455322Z         name sample_stream_solar in stream instance
2025-07-08T00:45:56.1456311Z         test-acc-tf-1610442013165794056--STARTED-CREATED has active processors, and
2025-07-08T00:45:56.1457551Z         cannot be changed. Reason: Forbidden. Params: [sample_stream_solar
2025-07-08T00:45:56.1458611Z         test-acc-tf-1610442013165794056--STARTED-CREATED], BadRequestDetail: 
2025-07-08T00:45:56.1483956Z   
2025-07-08T00:45:56.1503212Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated (31.18s)
```
### 2025-07-09
#### FAIL 31 seconds
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-07-09T01:00:42.625000+00:00-TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated',confidence=1.0,ts_when='18 minutes ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-07-09T01:00:42.6259645Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-07-09T01:00:42.6260320Z     resource_test.go:250: Testing: Verifies a processor cannot transition from STARTED to CREATED state
2025-07-09T01:00:42.6262086Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-07-09T01:00:42.6314068Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-07-09T01:00:42.6314643Z     resource_test.go:251: Step 1/2 error: Error running apply: exit status 1
2025-07-09T01:00:42.6314987Z         
2025-07-09T01:00:42.6315245Z         Error: error creating resource
2025-07-09T01:00:42.6315504Z         
2025-07-09T01:00:42.6315851Z           with mongodbatlas_stream_processor.processor,
2025-07-09T01:00:42.6316525Z           on terraform_plugin_test.tf line 31, in resource "mongodbatlas_stream_processor" "processor":
2025-07-09T01:00:42.6317147Z           31: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-09T01:00:42.6317637Z         
2025-07-09T01:00:42.6318477Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/686db7ff725a79527bea68dc/streams/test-acc-tf-2533026301715539594--STARTED-CREATED/processor
2025-07-09T01:00:42.6319348Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-09T01:00:42.6319992Z         Detail: Streams Processor with this name (processor-started-to-created) had a
2025-07-09T01:00:42.6320633Z         problem occur: failed to acquire resources for stream processor validation:
2025-07-09T01:00:42.6321245Z         internal error while provisioning resource from global resource manager.
2025-07-09T01:00:42.6321875Z         Reason: Bad Request. Params: [processor-started-to-created failed to acquire
2025-07-09T01:00:42.6322517Z         resources for stream processor validation: internal error while provisioning
2025-07-09T01:00:42.6323084Z         resource from global resource manager], BadRequestDetail: 
2025-07-09T01:00:42.6334899Z   
2025-07-09T01:00:42.6401022Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-07-09T01:00:42.6401687Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-09T01:00:42.6402112Z         
2025-07-09T01:00:42.6402376Z         Error: error deleting resource
2025-07-09T01:00:42.6402632Z         
2025-07-09T01:00:42.6403588Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/686db7ff725a79527bea68dc/streams/test-acc-tf-2533026301715539594--STARTED-CREATED/connections/sample_stream_solar
2025-07-09T01:00:42.6404412Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-09T01:00:42.6404926Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-09T01:00:42.6405403Z         name sample_stream_solar in stream instance
2025-07-09T01:00:42.6405954Z         test-acc-tf-2533026301715539594--STARTED-CREATED has active processors, and
2025-07-09T01:00:42.6406551Z         cannot be changed. Reason: Forbidden. Params: [sample_stream_solar
2025-07-09T01:00:42.6407255Z         test-acc-tf-2533026301715539594--STARTED-CREATED], BadRequestDetail: 
2025-07-09T01:00:42.6409869Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated (31.19s)
```