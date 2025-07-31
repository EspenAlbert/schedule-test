# stream/streamprocessor/TestAccStreamProcessor_clusterType Test Details
# Found 33 TestRuns in dev, qa from 2025-07-01 to 2025-07-31 from master branch: 1 unique tests, PASS(x 28) FAIL(x 5)
Success rate: 84.85%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-02 00:46](#error-2025-07-02t0046310000) | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 31.04s
[2025-07-11 02:31](#error-2025-07-11t0231570000) |  | dev | timeout | 3600.09s
[2025-07-13 00:52](#error-2025-07-13t0052250000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6872fe96006d8d55bbaa2991/streams/test-acc-tf-3806523678346651230/processor | qa |  | 31.05s
[2025-07-14 04:02](#error-2025-07-14t0402140000) |  | dev | timeout | 3600.05s
[2025-07-20 00:53](#error-2025-07-20t0053030000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/687c393e823af9166ef91845/streams/test-acc-tf-s-9049831376135069608/connections | qa |  | 0.06s

## Timeline
- 2025-07-01 PASS 13 seconds
- 2025-07-02

### Error 2025-07-02T00:46:31+00:00
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-07-02T00:46:31.932000+00:00-TestAccStreamProcessor_clusterType',confidence=1.0,ts_when='29 days ago')
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

- 2025-07-03 PASS 26 seconds
- 2025-07-04 PASS 11 seconds
- 2025-07-05 PASS 14 seconds
- 2025-07-06 PASS 12 seconds
- 2025-07-07 PASS 12 seconds
- 2025-07-08 PASS 15 seconds
- 2025-07-09 PASS 13 seconds
- 2025-07-10
  - PASS 33 seconds
  - PASS 28 seconds
- 2025-07-11

### Error 2025-07-11T02:31:57+00:00
```
2025-07-11T02:31:57.1732493Z === RUN   TestAccStreamProcessor_clusterType
2025-07-11T02:31:57.1733014Z     resource_test.go:258: Creating execution cluster: test-acc-tf-c-5549885420028586254
2025-07-11T02:31:57.1733447Z     resource_test.go:258: 
2025-07-11T02:31:57.1734312Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2025-07-11T02:31:57.1736189Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:112
2025-07-11T02:31:57.1738003Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:258
2025-07-11T02:31:57.1738758Z         	Error:      	Received unexpected error:
2025-07-11T02:31:57.1739661Z         	            	timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2025-07-11T02:31:57.1740430Z         	Test:       	TestAccStreamProcessor_clusterType
2025-07-11T02:31:57.1741470Z         	Messages:   	Cluster creation failed: test-acc-tf-c-5549885420028586254, err: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2025-07-11T02:31:57.1742174Z --- FAIL: TestAccStreamProcessor_clusterType (3600.87s)
```

- 2025-07-12 PASS 29 seconds
- 2025-07-13

### Error 2025-07-13T00:52:25+00:00
```
2025-07-13T00:52:25.1992256Z === RUN   TestAccStreamProcessor_clusterType
2025-07-13T00:52:25.1995610Z === CONT  TestAccStreamProcessor_clusterType
2025-07-13T00:52:25.1998296Z   diagnostic_detail=
2025-07-13T00:52:25.2000029Z    tf_resource_type=mongodbatlas_stream_processor
2025-07-13T00:52:25.2019769Z === NAME  TestAccStreamProcessor_clusterType
2025-07-13T00:52:25.2020260Z     resource_test.go:264: Step 1/1 error: Error running apply: exit status 1
2025-07-13T00:52:25.2020626Z         
2025-07-13T00:52:25.2020897Z         Error: error creating resource
2025-07-13T00:52:25.2021341Z         
2025-07-13T00:52:25.2021704Z           with mongodbatlas_stream_processor.processor,
2025-07-13T00:52:25.2022396Z           on terraform_plugin_test.tf line 40, in resource "mongodbatlas_stream_processor" "processor":
2025-07-13T00:52:25.2023036Z           40: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-13T00:52:25.2023362Z         
2025-07-13T00:52:25.2024102Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6872fe96006d8d55bbaa2991/streams/test-acc-tf-3806523678346651230/processor
2025-07-13T00:52:25.2024917Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-13T00:52:25.2025565Z         Detail: Streams Processor with this name (new-processor) had a problem occur:
2025-07-13T00:52:25.2026218Z         failed to acquire resources for stream processor validation: internal error
2025-07-13T00:52:25.2026977Z         while provisioning resource from global resource manager. Reason: Bad
2025-07-13T00:52:25.2027582Z         Request. Params: [new-processor failed to acquire resources for stream
2025-07-13T00:52:25.2028229Z         processor validation: internal error while provisioning resource from global
2025-07-13T00:52:25.2028715Z         resource manager], BadRequestDetail: 
2025-07-13T00:52:25.2046583Z   
2025-07-13T00:52:25.2091269Z === NAME  TestAccStreamProcessor_clusterType
2025-07-13T00:52:25.2091848Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-13T00:52:25.2092305Z         
2025-07-13T00:52:25.2092579Z         Error: error deleting resource
2025-07-13T00:52:25.2092844Z         
2025-07-13T00:52:25.2093754Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6872fe96006d8d55bbaa2991/streams/test-acc-tf-3806523678346651230/connections/ClusterConnectionSrc
2025-07-13T00:52:25.2094597Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-13T00:52:25.2095134Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-13T00:52:25.2095760Z         name test-acc-tf-3806523678346651230 has active processors, and cannot be
2025-07-13T00:52:25.2096507Z         changed. Reason: Forbidden. Params: [test-acc-tf-3806523678346651230],
2025-07-13T00:52:25.2096928Z         BadRequestDetail: 
2025-07-13T00:52:25.2097225Z --- FAIL: TestAccStreamProcessor_clusterType (31.52s)
```

- 2025-07-14

### Error 2025-07-14T04:02:14+00:00
```
2025-07-14T04:02:14.1466414Z === RUN   TestAccStreamProcessor_clusterType
2025-07-14T04:02:14.1466935Z     resource_test.go:258: Creating execution cluster: test-acc-tf-c-5794386898496894607
2025-07-14T04:02:14.1467377Z     resource_test.go:258: 
2025-07-14T04:02:14.1468250Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2025-07-14T04:02:14.1470082Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:112
2025-07-14T04:02:14.1471887Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:258
2025-07-14T04:02:14.1472636Z         	Error:      	Received unexpected error:
2025-07-14T04:02:14.1473789Z         	            	timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2025-07-14T04:02:14.1474357Z         	Test:       	TestAccStreamProcessor_clusterType
2025-07-14T04:02:14.1475385Z         	Messages:   	Cluster creation failed: test-acc-tf-c-5794386898496894607, err: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2025-07-14T04:02:14.1476094Z --- FAIL: TestAccStreamProcessor_clusterType (3600.55s)
```

- 2025-07-15 PASS 10 seconds
- 2025-07-16 PASS 14 seconds
- 2025-07-17 PASS 11 seconds
- 2025-07-18 PASS 12 seconds
- 2025-07-19 PASS 13 seconds
- 2025-07-20

### Error 2025-07-20T00:53:03+00:00
```
2025-07-20T00:53:03.7323018Z === RUN   TestAccStreamProcessor_clusterType
2025-07-20T00:53:03.7324660Z === CONT  TestAccStreamProcessor_clusterType
2025-07-20T00:53:03.7416542Z === NAME  TestAccStreamProcessor_clusterType
2025-07-20T00:53:03.7417060Z     resource_test.go:273: Step 1/1 error: Error running apply: exit status 1
2025-07-20T00:53:03.7417460Z         
2025-07-20T00:53:03.7417731Z         Error: error creating resource
2025-07-20T00:53:03.7418085Z         
2025-07-20T00:53:03.7418438Z           with mongodbatlas_stream_connection.cluster_src,
2025-07-20T00:53:03.7419209Z           on terraform_plugin_test.tf line 23, in resource "mongodbatlas_stream_connection" "cluster_src":
2025-07-20T00:53:03.7419976Z           23:             resource "mongodbatlas_stream_connection" "cluster_src" {
2025-07-20T00:53:03.7420404Z         
2025-07-20T00:53:03.7421230Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/687c393e823af9166ef91845/streams/test-acc-tf-s-9049831376135069608/connections
2025-07-20T00:53:03.7422314Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-07-20T00:53:03.7422996Z         Detail: Stream instance for project 687c393e823af9166ef91845 and name
2025-07-20T00:53:03.7423691Z         test-acc-tf-s-9049831376135069608 not found. Reason: Not Found. Params:
2025-07-20T00:53:03.7424313Z         [687c393e823af9166ef91845 test-acc-tf-s-9049831376135069608],
2025-07-20T00:53:03.7424707Z         BadRequestDetail: 
2025-07-20T00:53:03.7452102Z    test_terraform_path=/home/runner/work/_temp/b448e69b-90e1-46c0-857c-8546e15106bc/terraform
2025-07-20T00:53:03.7467332Z --- FAIL: TestAccStreamProcessor_clusterType (0.63s)
```

- 2025-07-21 PASS 16 seconds
- 2025-07-22 PASS 12 seconds
- 2025-07-23
  - PASS 11 seconds
  - PASS 12 seconds
- 2025-07-24 PASS 12 seconds
- 2025-07-25 PASS 14 seconds
- 2025-07-26 PASS 16 seconds
- 2025-07-27 PASS 9 seconds
- 2025-07-28 PASS 12 seconds
- 2025-07-29 PASS 10 seconds
- 2025-07-30 PASS 11 seconds
- 2025-07-31 PASS 11 seconds