# stream/streamconnection/TestAccStreamRSStreamConnection_cluster Test Details
# Found 44 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 41) FAIL(x 3)
Success rate: 93.18%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-30 15:25](#error-2025-09-30t1525090000) |  | qa | flaky_client | 387.05s
[2025-10-13 01:00](#error-2025-10-13t0100440000) |  | dev |  | 300.08s
[2025-10-19 00:50](#error-2025-10-19t0050120000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68f43174353f113dafd15147/streams/test-acc-tf-s-3100645711005476142/connections | qa |  | 1.05s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23 PASS 5 seconds
- 2025-09-24 PASS 4 seconds
- 2025-09-25 PASS 5 seconds
- 2025-09-26 PASS 4 seconds
- 2025-09-27 PASS 5 seconds
- 2025-09-28 PASS 5 seconds
- 2025-09-29
  - PASS 6 seconds
  - PASS 5 seconds
- 2025-09-30
  - PASS 4 seconds
  - PASS 4 seconds
  - PASS 9 seconds
  - PASS 4 seconds
  - FAIL 6 minutes

### Error 2025-09-30T15:25:09+00:00
```
2025-09-30T15:25:09.2035990Z === RUN   TestAccStreamRSStreamConnection_cluster
2025-09-30T15:25:09.2036581Z     resource_stream_connection_test.go:182: Creating execution cluster: test-acc-tf-c-125580834527346356
2025-09-30T15:25:09.2037099Z     resource_stream_connection_test.go:182: 
2025-09-30T15:25:09.2038005Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:47
2025-09-30T15:25:09.2039733Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:135
2025-09-30T15:25:09.2041712Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:189
2025-09-30T15:25:09.2043804Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:182
2025-09-30T15:25:09.2044826Z         	Error:      	Received unexpected error:
2025-09-30T15:25:09.2046443Z         	            	Get "https://cloud-qa.mongodb.com/api/atlas/v2/groups/68dbf200a072243c859d3e8e/clusters/test-acc-tf-c-125580834527346356": dial tcp: lookup cloud-qa.mongodb.com: i/o timeout
2025-09-30T15:25:09.2047477Z         	Test:       	TestAccStreamRSStreamConnection_cluster
2025-09-30T15:25:09.2049005Z         	Messages:   	Cluster creation failed: test-acc-tf-c-125580834527346356, err: Get "https://cloud-qa.mongodb.com/api/atlas/v2/groups/68dbf200a072243c859d3e8e/clusters/test-acc-tf-c-125580834527346356": dial tcp: lookup cloud-qa.mongodb.com: i/o timeout
2025-09-30T15:25:09.2051090Z --- FAIL: TestAccStreamRSStreamConnection_cluster (387.51s)
```

- 2025-10-01
  - PASS 5 seconds
  - PASS 3 seconds
  - PASS 5 seconds
  - PASS 5 seconds
  - PASS 5 seconds
  - PASS 4 seconds
  - PASS 5 seconds
  - PASS 5 seconds
- 2025-10-02 PASS 3 seconds
- 2025-10-03 PASS 4 seconds
- 2025-10-04 PASS 6 seconds
- 2025-10-05 PASS 5 seconds
- 2025-10-06 PASS 5 seconds
- 2025-10-07 PASS 4 seconds
- 2025-10-08 PASS 5 seconds
- 2025-10-09 PASS 5 seconds
- 2025-10-10 PASS 5 seconds
- 2025-10-11 PASS 4 seconds
- 2025-10-12 PASS 44 seconds
- 2025-10-13

### Error 2025-10-13T01:00:44+00:00
```
2025-10-13T01:00:44.5431664Z === RUN   TestAccStreamRSStreamConnection_cluster
2025-10-13T01:00:44.5436464Z === CONT  TestAccStreamRSStreamConnection_cluster
2025-10-13T01:00:44.5452791Z === NAME  TestAccStreamRSStreamConnection_cluster
2025-10-13T01:00:44.5453519Z     resource_stream_connection_test.go:183: Step 1/2 error: Error running apply: exit status 1
2025-10-13T01:00:44.5453957Z         
2025-10-13T01:00:44.5454283Z         Error: error creating resource
2025-10-13T01:00:44.5454568Z         
2025-10-13T01:00:44.5454970Z           with mongodbatlas_stream_connection.test,
2025-10-13T01:00:44.5455749Z           on terraform_plugin_test.tf line 23, in resource "mongodbatlas_stream_connection" "test":
2025-10-13T01:00:44.5456437Z           23: 		resource "mongodbatlas_stream_connection" "test" {
2025-10-13T01:00:44.5456776Z         
2025-10-13T01:00:44.5457325Z         (504 Gateway Timeout) failed to decode response body: undefined response type
2025-10-13T01:00:44.5465826Z    test_name=TestAccStreamRSStreamConnection_kafkaSSL test_terraform_path=/home/runner/work/_temp/6d87958b-7036-4585-be2d-7248c9545d7d/terraform test_working_directory=/tmp/plugintest617662187 test_step_number=1
2025-10-13T01:00:44.5471868Z --- FAIL: TestAccStreamRSStreamConnection_cluster (300.79s)
```

- 2025-10-14 PASS 6 seconds
- 2025-10-15 PASS 3 seconds
- 2025-10-16 PASS 6 seconds
- 2025-10-17 PASS 6 seconds
- 2025-10-18 PASS 12 minutes
- 2025-10-19

### Error 2025-10-19T00:50:12+00:00
```
2025-10-19T00:50:12.1473199Z === RUN   TestAccStreamRSStreamConnection_cluster
2025-10-19T00:50:12.1482333Z === CONT  TestAccStreamRSStreamConnection_cluster
2025-10-19T00:50:12.1526316Z === NAME  TestAccStreamRSStreamConnection_cluster
2025-10-19T00:50:12.1526996Z     resource_stream_connection_test.go:286: Step 1/2 error: Error running apply: exit status 1
2025-10-19T00:50:12.1527425Z         
2025-10-19T00:50:12.1527702Z         Error: error creating resource
2025-10-19T00:50:12.1527972Z         
2025-10-19T00:50:12.1528441Z           with mongodbatlas_stream_connection.test,
2025-10-19T00:50:12.1529105Z           on terraform_plugin_test.tf line 23, in resource "mongodbatlas_stream_connection" "test":
2025-10-19T00:50:12.1529709Z           23: 		resource "mongodbatlas_stream_connection" "test" {
2025-10-19T00:50:12.1530024Z         
2025-10-19T00:50:12.1530784Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68f43174353f113dafd15147/streams/test-acc-tf-s-3100645711005476142/connections
2025-10-19T00:50:12.1531619Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-10-19T00:50:12.1532321Z         Detail: Stream instance for project 68f43174353f113dafd15147 and name
2025-10-19T00:50:12.1532928Z         test-acc-tf-s-3100645711005476142 not found. Reason: Not Found. Params:
2025-10-19T00:50:12.1533501Z         [68f43174353f113dafd15147 test-acc-tf-s-3100645711005476142],
2025-10-19T00:50:12.1533887Z         BadRequestDetail: 
2025-10-19T00:50:12.1553011Z    test_step_number=1 test_terraform_path=/home/runner/work/_temp/900806b3-a17f-4fd8-9610-14d4dc9797f0/terraform test_working_directory=/tmp/plugintest2810576189
2025-10-19T00:50:12.1633137Z --- FAIL: TestAccStreamRSStreamConnection_cluster (1.54s)
```

- 2025-10-20
  - PASS 7 seconds
  - PASS 9 minutes
- 2025-10-21 PASS 12 minutes
- 2025-10-22
  - PASS 7 seconds
  - PASS 6 seconds