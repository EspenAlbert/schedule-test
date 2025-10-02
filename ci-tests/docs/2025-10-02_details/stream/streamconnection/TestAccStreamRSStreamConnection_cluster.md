# stream/streamconnection/TestAccStreamRSStreamConnection_cluster Test Details
# Found 47 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 42) FAIL(x 5)
Success rate: 89.36%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-07 00:50](#error-2025-09-07t0050490000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68bcd1d5df5af52d2d4d5831/streams/test-acc-tf-s-4047930990064627307/connections | qa |  | 0.10s
[2025-09-08 09:53](#error-2025-09-08t0953420000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bea2b5341d8a49877630ee/streams/test-acc-tf-s-1822128021936268327/connections | qa | flaky_500 | 32.08s
[2025-09-14 00:45](#error-2025-09-14t0045380000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68c60c43d444485797b214ed/streams/test-acc-tf-s-1571941844326212806/connections | qa |  | 0.09s
[2025-09-15 06:36](#error-2025-09-15t0636280000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68c7b04bfe60767b7f9b139f/streams/test-acc-tf-s-5005804337291291222/connections | qa | flaky_500 | 1.00s
[2025-09-30 15:25](#error-2025-09-30t1525090000) |  | qa | flaky_client | 387.05s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 4 seconds
- 2025-09-04 PASS 5 seconds
- 2025-09-05 PASS 5 seconds
- 2025-09-06 PASS 4 seconds
- 2025-09-07

### Error 2025-09-07T00:50:49+00:00
```
2025-09-07T00:50:49.0133255Z === RUN   TestAccStreamRSStreamConnection_cluster
2025-09-07T00:50:49.0139225Z === CONT  TestAccStreamRSStreamConnection_cluster
2025-09-07T00:50:49.0202242Z === NAME  TestAccStreamRSStreamConnection_cluster
2025-09-07T00:50:49.0202818Z     resource_stream_connection_test.go:183: Step 1/2 error: Error running apply: exit status 1
2025-09-07T00:50:49.0203244Z         
2025-09-07T00:50:49.0203720Z         Error: error creating resource
2025-09-07T00:50:49.0203997Z         
2025-09-07T00:50:49.0204338Z           with mongodbatlas_stream_connection.test,
2025-09-07T00:50:49.0204992Z           on terraform_plugin_test.tf line 23, in resource "mongodbatlas_stream_connection" "test":
2025-09-07T00:50:49.0205598Z           23: 		resource "mongodbatlas_stream_connection" "test" {
2025-09-07T00:50:49.0206020Z         
2025-09-07T00:50:49.0206796Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd1d5df5af52d2d4d5831/streams/test-acc-tf-s-4047930990064627307/connections
2025-09-07T00:50:49.0207625Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-09-07T00:50:49.0208217Z         Detail: Stream instance for project 68bcd1d5df5af52d2d4d5831 and name
2025-09-07T00:50:49.0208824Z         test-acc-tf-s-4047930990064627307 not found. Reason: Not Found. Params:
2025-09-07T00:50:49.0209477Z         [68bcd1d5df5af52d2d4d5831 test-acc-tf-s-4047930990064627307],
2025-09-07T00:50:49.0209880Z         BadRequestDetail: 
2025-09-07T00:50:49.0217370Z    test_name=TestAccStreamRSStreamConnection_kafkaPlaintext test_terraform_path=/home/runner/work/_temp/4f895247-4d79-45c5-ba85-d71e6b632802/terraform test_working_directory=/tmp/plugintest213426139 test_step_number=1
2025-09-07T00:50:49.0227326Z --- FAIL: TestAccStreamRSStreamConnection_cluster (0.99s)
```

- 2025-09-08
  - PASS 5 seconds
  - FAIL 32 seconds

### Error 2025-09-08T09:53:42+00:00
```
2025-09-08T09:53:42.3755937Z === RUN   TestAccStreamRSStreamConnection_cluster
2025-09-08T09:53:42.3764215Z === CONT  TestAccStreamRSStreamConnection_cluster
2025-09-08T09:53:42.3852541Z === NAME  TestAccStreamRSStreamConnection_cluster
2025-09-08T09:53:42.3853553Z     resource_stream_connection_test.go:183: Step 1/2 error: Error running apply: exit status 1
2025-09-08T09:53:42.3854268Z         
2025-09-08T09:53:42.3854733Z         Error: error creating resource
2025-09-08T09:53:42.3855176Z         
2025-09-08T09:53:42.3856274Z           with mongodbatlas_stream_connection.test,
2025-09-08T09:53:42.3882514Z           on terraform_plugin_test.tf line 23, in resource "mongodbatlas_stream_connection" "test":
2025-09-08T09:53:42.3883621Z           23: 		resource "mongodbatlas_stream_connection" "test" {
2025-09-08T09:53:42.3884175Z         
2025-09-08T09:53:42.3885534Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bea2b5341d8a49877630ee/streams/test-acc-tf-s-1822128021936268327/connections
2025-09-08T09:53:42.3887050Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-08T09:53:42.3888255Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-08T09:53:42.3888930Z         BadRequestDetail: 
2025-09-08T09:53:42.3889470Z --- FAIL: TestAccStreamRSStreamConnection_cluster (32.83s)
```

  - PASS 3 seconds
- 2025-09-09 PASS 4 seconds
- 2025-09-10 PASS 4 seconds
- 2025-09-11 PASS 5 seconds
- 2025-09-12
  - PASS 5 seconds
  - PASS 4 seconds
- 2025-09-13 PASS 6 seconds
- 2025-09-14

### Error 2025-09-14T00:45:38+00:00
```
2025-09-14T00:45:38.7896091Z === RUN   TestAccStreamRSStreamConnection_cluster
2025-09-14T00:45:38.7902393Z === CONT  TestAccStreamRSStreamConnection_cluster
2025-09-14T00:45:38.7922050Z === NAME  TestAccStreamRSStreamConnection_cluster
2025-09-14T00:45:38.7922612Z     resource_stream_connection_test.go:183: Step 1/2 error: Error running apply: exit status 1
2025-09-14T00:45:38.7923025Z         
2025-09-14T00:45:38.7923293Z         Error: error creating resource
2025-09-14T00:45:38.7923557Z         
2025-09-14T00:45:38.7923887Z           with mongodbatlas_stream_connection.test,
2025-09-14T00:45:38.7924532Z           on terraform_plugin_test.tf line 23, in resource "mongodbatlas_stream_connection" "test":
2025-09-14T00:45:38.7925130Z           23: 		resource "mongodbatlas_stream_connection" "test" {
2025-09-14T00:45:38.7925441Z         
2025-09-14T00:45:38.7926199Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c43d444485797b214ed/streams/test-acc-tf-s-1571941844326212806/connections
2025-09-14T00:45:38.7927022Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-09-14T00:45:38.7927604Z         Detail: Stream instance for project 68c60c43d444485797b214ed and name
2025-09-14T00:45:38.7928333Z         test-acc-tf-s-1571941844326212806 not found. Reason: Not Found. Params:
2025-09-14T00:45:38.7928890Z         [68c60c43d444485797b214ed test-acc-tf-s-1571941844326212806],
2025-09-14T00:45:38.7929276Z         BadRequestDetail: 
2025-09-14T00:45:38.7936704Z    test_terraform_path=/home/runner/work/_temp/4e309555-d1ed-43c4-85d0-4622947e7d4a/terraform test_name=TestAccStreamRSStreamConnection_kafkaSSL test_working_directory=/tmp/plugintest1430167410 test_step_number=1
2025-09-14T00:45:38.7966865Z --- FAIL: TestAccStreamRSStreamConnection_cluster (0.87s)
```

- 2025-09-15
  - PASS 3 seconds
  - PASS 5 seconds
  - FAIL a second

### Error 2025-09-15T06:36:28+00:00
```
2025-09-15T06:36:28.0046548Z === RUN   TestAccStreamRSStreamConnection_cluster
2025-09-15T06:36:28.0056971Z === CONT  TestAccStreamRSStreamConnection_cluster
2025-09-15T06:36:28.0083184Z === NAME  TestAccStreamRSStreamConnection_cluster
2025-09-15T06:36:28.0084418Z     resource_stream_connection_test.go:183: Step 1/2 error: Error running apply: exit status 1
2025-09-15T06:36:28.0085198Z         
2025-09-15T06:36:28.0085856Z         Error: error creating resource
2025-09-15T06:36:28.0086342Z         
2025-09-15T06:36:28.0086957Z           with mongodbatlas_stream_connection.test,
2025-09-15T06:36:28.0088381Z           on terraform_plugin_test.tf line 23, in resource "mongodbatlas_stream_connection" "test":
2025-09-15T06:36:28.0089503Z           23: 		resource "mongodbatlas_stream_connection" "test" {
2025-09-15T06:36:28.0090074Z         
2025-09-15T06:36:28.0091509Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b04bfe60767b7f9b139f/streams/test-acc-tf-s-5005804337291291222/connections
2025-09-15T06:36:28.0093043Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-09-15T06:36:28.0094137Z         Detail: Stream instance for project 68c7b04bfe60767b7f9b139f and name
2025-09-15T06:36:28.0095281Z         test-acc-tf-s-5005804337291291222 not found. Reason: Not Found. Params:
2025-09-15T06:36:28.0096546Z         [68c7b04bfe60767b7f9b139f test-acc-tf-s-5005804337291291222],
2025-09-15T06:36:28.0097257Z         BadRequestDetail: 
2025-09-15T06:36:28.0131388Z    test_name=TestAccStreamRSStreamConnection_kafkaSSL test_terraform_path=/home/runner/work/_temp/3cb86fb6-c69c-49a7-873f-7dee73528b05/terraform test_working_directory=/tmp/plugintest1953961249 test_step_number=1
2025-09-15T06:36:28.0204216Z --- FAIL: TestAccStreamRSStreamConnection_cluster (1.01s)
```

- 2025-09-16 PASS 4 seconds
- 2025-09-17 PASS 5 seconds
- 2025-09-18 PASS 5 seconds
- 2025-09-19 PASS 5 seconds
- 2025-09-20 PASS 3 seconds
- 2025-09-21 PASS 5 seconds
- 2025-09-22 PASS 5 seconds
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