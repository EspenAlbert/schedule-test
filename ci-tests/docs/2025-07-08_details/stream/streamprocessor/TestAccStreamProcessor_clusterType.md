# stream/streamprocessor/TestAccStreamProcessor_clusterType Test Details
# Found 10 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 9) FAIL
Success rate: 90.00%

## Timeline
### 2025-07-01
#### PASS 14 seconds
```
2025-07-01T08:50:28.2833376Z === RUN   TestAccStreamProcessor_clusterType
2025-07-01T08:50:28.2838351Z === CONT  TestAccStreamProcessor_clusterType
2025-07-01T08:50:28.2844126Z   diagnostic_detail=
2025-07-01T08:50:28.2847766Z   
2025-07-01T08:50:28.2856950Z --- PASS: TestAccStreamProcessor_clusterType (14.09s)
```
#### PASS 12 seconds
```
2025-07-01T12:50:20.6125115Z === RUN   TestAccStreamProcessor_clusterType
2025-07-01T12:50:20.6128192Z === CONT  TestAccStreamProcessor_clusterType
2025-07-01T12:50:20.6129530Z   diagnostic_detail=
2025-07-01T12:50:20.6131923Z    diagnostic_severity=ERROR tf_resource_type=mongodbatlas_stream_processor tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas diagnostic_summary="Invalid JSON String Value" diagnostic_attribute="AttributeName(\"pipeline\")"
2025-07-01T12:50:20.6137404Z --- PASS: TestAccStreamProcessor_clusterType (12.83s)
```
#### PASS 13 seconds
```
2025-07-01T17:50:24.3578936Z === RUN   TestAccStreamProcessor_clusterType
2025-07-01T17:50:24.3583139Z === CONT  TestAccStreamProcessor_clusterType
2025-07-01T17:50:24.3600882Z --- PASS: TestAccStreamProcessor_clusterType (13.12s)
```
### 2025-07-02
#### FAIL 31 seconds
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-07-02T00:46:31.932000+00:00-TestAccStreamProcessor_clusterType',confidence=1.0,ts_when='5 days ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-07-02T00:46:31.9329604Z === RUN   TestAccStreamProcessor_clusterType
2025-07-02T00:46:31.9332039Z === CONT  TestAccStreamProcessor_clusterType
2025-07-02T00:46:31.9408537Z === NAME  TestAccStreamProcessor_clusterType
2025-07-02T00:46:31.9409001Z     resource_test.go:264: Step 1/1 error: Error running apply: exit status 1
2025-07-02T00:46:31.9409354Z         
2025-07-02T00:46:31.9409618Z         Error: error creating resource
2025-07-02T00:46:31.9409880Z         
2025-07-02T00:46:31.9410224Z           with mongodbatlas_stream_processor.processor,
2025-07-02T00:46:31.9410905Z           on terraform_plugin_test.tf line 40, in resource "mongodbatlas_stream_processor" "processor":
2025-07-02T00:46:31.9411657Z           40: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-02T00:46:31.9412108Z         
2025-07-02T00:46:31.9412849Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68647d45ef5b3c2f1ae5eb8b/streams/test-acc-tf-1836014474039390574/processor
2025-07-02T00:46:31.9413662Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-02T00:46:31.9414309Z         Detail: Streams Processor with this name (new-processor) had a problem occur:
2025-07-02T00:46:31.9414984Z         failed to acquire resources for stream processor validation: internal error
2025-07-02T00:46:31.9415607Z         while provisioning resource from global resource manager. Reason: Bad
2025-07-02T00:46:31.9416214Z         Request. Params: [new-processor failed to acquire resources for stream
2025-07-02T00:46:31.9416855Z         processor validation: internal error while provisioning resource from global
2025-07-02T00:46:31.9417347Z         resource manager], BadRequestDetail: 
2025-07-02T00:46:31.9429965Z   
2025-07-02T00:46:31.9466885Z === NAME  TestAccStreamProcessor_clusterType
2025-07-02T00:46:31.9467448Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-02T00:46:31.9467877Z         
2025-07-02T00:46:31.9468141Z         Error: error deleting resource
2025-07-02T00:46:31.9468399Z         
2025-07-02T00:46:31.9469274Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68647d45ef5b3c2f1ae5eb8b/streams/test-acc-tf-1836014474039390574/connections/ClusterConnectionSrc
2025-07-02T00:46:31.9470046Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-02T00:46:31.9470573Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-02T00:46:31.9471226Z         name test-acc-tf-1836014474039390574 has active processors, and cannot be
2025-07-02T00:46:31.9471934Z         changed. Reason: Forbidden. Params: [test-acc-tf-1836014474039390574],
2025-07-02T00:46:31.9472341Z         BadRequestDetail: 
2025-07-02T00:46:31.9472637Z --- FAIL: TestAccStreamProcessor_clusterType (31.44s)
```
### 2025-07-03
#### PASS 26 seconds
```
2025-07-03T00:46:39.9791736Z === RUN   TestAccStreamProcessor_clusterType
2025-07-03T00:46:39.9794351Z === CONT  TestAccStreamProcessor_clusterType
2025-07-03T00:46:39.9804094Z --- PASS: TestAccStreamProcessor_clusterType (26.82s)
```
### 2025-07-04
#### PASS 11 seconds
```
2025-07-04T00:51:07.7211261Z === RUN   TestAccStreamProcessor_clusterType
2025-07-04T00:51:07.7214035Z === CONT  TestAccStreamProcessor_clusterType
2025-07-04T00:51:07.7224264Z --- PASS: TestAccStreamProcessor_clusterType (11.68s)
```
### 2025-07-05
#### PASS 14 seconds
```
2025-07-05T00:44:07.6140099Z === RUN   TestAccStreamProcessor_clusterType
2025-07-05T00:44:07.6142222Z === CONT  TestAccStreamProcessor_clusterType
2025-07-05T00:44:07.6152332Z --- PASS: TestAccStreamProcessor_clusterType (14.82s)
```
### 2025-07-06
#### PASS 12 seconds
```
2025-07-06T00:48:43.0300585Z === RUN   TestAccStreamProcessor_clusterType
2025-07-06T00:48:43.0303525Z === CONT  TestAccStreamProcessor_clusterType
2025-07-06T00:48:43.0305032Z   diagnostic_detail=
2025-07-06T00:48:43.0307503Z    diagnostic_summary="Invalid JSON String Value" tf_req_id=9acae79e-700c-bccd-e1cc-5308ad0a8dcf tf_resource_type=mongodbatlas_stream_processor diagnostic_severity=ERROR diagnostic_attribute="AttributeName(\"pipeline\")"
2025-07-06T00:48:43.0312212Z --- PASS: TestAccStreamProcessor_clusterType (12.07s)
```
### 2025-07-07
#### PASS 12 seconds
```
2025-07-07T00:48:05.8092834Z === RUN   TestAccStreamProcessor_clusterType
2025-07-07T00:48:05.8094993Z === CONT  TestAccStreamProcessor_clusterType
2025-07-07T00:48:05.8105174Z --- PASS: TestAccStreamProcessor_clusterType (12.27s)
```
### 2025-07-08
#### PASS 15 seconds
```
2025-07-08T00:45:56.1506786Z === RUN   TestAccStreamProcessor_clusterType
2025-07-08T00:45:56.1510479Z === CONT  TestAccStreamProcessor_clusterType
2025-07-08T00:45:56.1528688Z --- PASS: TestAccStreamProcessor_clusterType (15.21s)
```