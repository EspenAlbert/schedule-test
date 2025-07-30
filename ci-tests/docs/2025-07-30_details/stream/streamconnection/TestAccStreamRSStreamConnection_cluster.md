# stream/streamconnection/TestAccStreamRSStreamConnection_cluster Test Details
# Found 39 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 36) FAIL(x 3)
Success rate: 92.31%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-10 13:24](#error-2025-07-10t1324520000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686fbb05006d8d55bb9e68f0/streams | qa | flaky_500 | 32.00s
[2025-07-14 04:02](#error-2025-07-14t0402140000) |  | dev | timeout | 3600.07s
[2025-07-27 00:53](#error-2025-07-27t0053080000) | UNEXPECTED_ERROR /api/atlas/v2/groups/688573dbea884d723491e609/streams/test-acc-tf-s-2606522514647022798/connections | qa | flaky_500 | 61.04s

## Timeline
- 2025-06-30: MISSING
- 2025-07-01
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 7 seconds
  - PASS 6 seconds
  - PASS 7 seconds
  - PASS 7 seconds
  - PASS 5 seconds
  - PASS 6 seconds
- 2025-07-02 PASS 6 seconds
- 2025-07-03 PASS 6 seconds
- 2025-07-04 PASS 5 seconds
- 2025-07-05 PASS 6 seconds
- 2025-07-06 PASS 10 seconds
- 2025-07-07 PASS 6 seconds
- 2025-07-08 PASS 5 seconds
- 2025-07-09 PASS 5 seconds
- 2025-07-10
  - PASS 8 seconds
  - FAIL 32 seconds

### Error 2025-07-10T13:24:52+00:00
```
2025-07-10T13:24:52.3334553Z === RUN   TestAccStreamRSStreamConnection_cluster
2025-07-10T13:24:52.3343291Z === CONT  TestAccStreamRSStreamConnection_cluster
2025-07-10T13:24:52.3423745Z === NAME  TestAccStreamRSStreamConnection_cluster
2025-07-10T13:24:52.3424304Z     resource_stream_connection_test.go:139: Step 1/2 error: Error running apply: exit status 1
2025-07-10T13:24:52.3424709Z         
2025-07-10T13:24:52.3425120Z         Error: error creating resource
2025-07-10T13:24:52.3425386Z         
2025-07-10T13:24:52.3425705Z           with mongodbatlas_stream_instance.test,
2025-07-10T13:24:52.3426339Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_instance" "test":
2025-07-10T13:24:52.3426924Z           12: 		resource "mongodbatlas_stream_instance" "test" {
2025-07-10T13:24:52.3427223Z         
2025-07-10T13:24:52.3427727Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686fbb05006d8d55bb9e68f0/streams
2025-07-10T13:24:52.3428396Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-10T13:24:52.3428972Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-10T13:24:52.3429356Z         BadRequestDetail: 
2025-07-10T13:24:52.3440404Z    test_terraform_path=/home/runner/work/_temp/4d5cd8a7-2970-4d68-aa4b-10ee84c3df9f/terraform test_working_directory=/tmp/plugintest705662858
2025-07-10T13:24:52.3465649Z --- FAIL: TestAccStreamRSStreamConnection_cluster (32.00s)
```

- 2025-07-11 PASS 6 seconds
- 2025-07-12 PASS 6 seconds
- 2025-07-13 PASS 15 seconds
- 2025-07-14

### Error 2025-07-14T04:02:14+00:00
```
2025-07-14T04:02:14.1014875Z === RUN   TestAccStreamRSStreamConnection_cluster
2025-07-14T04:02:14.1015955Z     resource_stream_connection_test.go:145: Creating execution cluster: test-acc-tf-c-5914867886748204750
2025-07-14T04:02:14.1016901Z     resource_stream_connection_test.go:145: 
2025-07-14T04:02:14.1018544Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2025-07-14T04:02:14.1021744Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:112
2025-07-14T04:02:14.1025601Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:152
2025-07-14T04:02:14.1029685Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:145
2025-07-14T04:02:14.1031186Z         	Error:      	Received unexpected error:
2025-07-14T04:02:14.1033002Z         	            	timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2025-07-14T04:02:14.1034050Z         	Test:       	TestAccStreamRSStreamConnection_cluster
2025-07-14T04:02:14.1035952Z         	Messages:   	Cluster creation failed: test-acc-tf-c-5914867886748204750, err: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2025-07-14T04:02:14.1037243Z --- FAIL: TestAccStreamRSStreamConnection_cluster (3600.65s)
```

- 2025-07-15 PASS 4 seconds
- 2025-07-16 PASS 5 seconds
- 2025-07-17 PASS 4 seconds
- 2025-07-18 PASS 8 seconds
- 2025-07-19 PASS 4 seconds
- 2025-07-20 PASS 4 seconds
- 2025-07-21 PASS 5 seconds
- 2025-07-22 PASS 5 seconds
- 2025-07-23
  - PASS 4 seconds
  - PASS 3 seconds
- 2025-07-24 PASS 4 seconds
- 2025-07-25 PASS 5 seconds
- 2025-07-26 PASS 4 seconds
- 2025-07-27

### Error 2025-07-27T00:53:08+00:00
```
2025-07-27T00:53:08.7895433Z === RUN   TestAccStreamRSStreamConnection_cluster
2025-07-27T00:53:08.7901050Z === CONT  TestAccStreamRSStreamConnection_cluster
2025-07-27T00:53:08.7994370Z === NAME  TestAccStreamRSStreamConnection_cluster
2025-07-27T00:53:08.7994946Z     resource_stream_connection_test.go:183: Step 1/2 error: Error running apply: exit status 1
2025-07-27T00:53:08.7995378Z         
2025-07-27T00:53:08.7995760Z         Error: error fetching results
2025-07-27T00:53:08.7996031Z         
2025-07-27T00:53:08.7996384Z           with data.mongodbatlas_stream_connections.test,
2025-07-27T00:53:08.7997034Z           on terraform_plugin_test.tf line 18, in data "mongodbatlas_stream_connections" "test":
2025-07-27T00:53:08.7997623Z           18: data "mongodbatlas_stream_connections" "test" {
2025-07-27T00:53:08.7997927Z         
2025-07-27T00:53:08.7998710Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/688573dbea884d723491e609/streams/test-acc-tf-s-2606522514647022798/connections
2025-07-27T00:53:08.7999591Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-27T00:53:08.8000186Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-27T00:53:08.8000582Z         BadRequestDetail: 
2025-07-27T00:53:08.8013167Z   
2025-07-27T00:53:08.8059953Z === NAME  TestAccStreamRSStreamConnection_cluster
2025-07-27T00:53:08.8060540Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-27T00:53:08.8061134Z         
2025-07-27T00:53:08.8061396Z         Error: error deleting resource
2025-07-27T00:53:08.8061656Z         
2025-07-27T00:53:08.8062508Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/688573dbea884d723491e609/streams/test-acc-tf-s-2606522514647022798/connections/conn-cluster
2025-07-27T00:53:08.8063416Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-07-27T00:53:08.8064012Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-27T00:53:08.8064434Z         BadRequestDetail: 
2025-07-27T00:53:08.8064748Z --- FAIL: TestAccStreamRSStreamConnection_cluster (61.43s)
```

- 2025-07-28 PASS 4 seconds
- 2025-07-29 PASS 3 seconds
- 2025-07-30 PASS 3 seconds