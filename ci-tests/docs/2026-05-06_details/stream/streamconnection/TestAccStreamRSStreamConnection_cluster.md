# stream/streamconnection/TestAccStreamRSStreamConnection_cluster Test Details
# Found 38 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 36) FAIL(x 2)
Success rate: 94.74%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-07 04:23](#error-2026-04-07t0423270000) |  | dev | timeout | 11466.03s
[2026-04-16 00:56](#error-2026-04-16t0056520000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e032b21ec945fedc7295aa/clusters | dev | out_of_capacity | 0.06s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07

### Error 2026-04-07T04:23:27+00:00
```
2026-04-07T04:23:27.1250581Z === RUN   TestAccStreamRSStreamConnection_cluster
2026-04-07T04:23:27.1251250Z     resource_stream_connection_test.go:291: Creating execution cluster: test-acc-tf-c-2315886339093874997
2026-04-07T04:23:27.1264159Z === CONT  TestAccStreamRSStreamConnection_cluster
2026-04-07T04:23:27.1300772Z === NAME  TestAccStreamRSStreamConnection_cluster
2026-04-07T04:23:27.1301406Z     resource_stream_connection_test.go:292: Step 1/2 error: Error running apply: exit status 1
2026-04-07T04:23:27.1302161Z         
2026-04-07T04:23:27.1302618Z         Error: error waiting for stream connection to be ready
2026-04-07T04:23:27.1302981Z         
2026-04-07T04:23:27.1303356Z           with mongodbatlas_stream_connection.test,
2026-04-07T04:23:27.1304382Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_stream_connection" "test":
2026-04-07T04:23:27.1305406Z           25: 		resource "mongodbatlas_stream_connection" "test" {
2026-04-07T04:23:27.1305914Z         
2026-04-07T04:23:27.1306610Z         timeout while waiting for state to become 'READY, FAILED' (last state:
2026-04-07T04:23:27.1307383Z         'PENDING', timeout: 3h0m0s)
2026-04-07T04:23:27.1307994Z --- FAIL: TestAccStreamRSStreamConnection_cluster (11466.34s)
```

- 2026-04-08 PASS 9 seconds
- 2026-04-09 PASS 27 minutes
- 2026-04-10 PASS 9 seconds
- 2026-04-11 PASS 11 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 8 seconds
- 2026-04-14 PASS 12 minutes
- 2026-04-15 PASS 8 seconds
- 2026-04-16

### Error 2026-04-16T00:56:52+00:00
```
2026-04-16T00:56:52.0181604Z === RUN   TestAccStreamRSStreamConnection_cluster
2026-04-16T00:56:52.0182118Z     resource_stream_connection_test.go:291: Creating execution cluster: test-acc-tf-c-6531355222494240821
2026-04-16T00:56:52.0182568Z     resource_stream_connection_test.go:291: 
2026-04-16T00:56:52.0184067Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:46
2026-04-16T00:56:52.0185437Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:194
2026-04-16T00:56:52.0186997Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:298
2026-04-16T00:56:52.0188808Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:291
2026-04-16T00:56:52.0189483Z         	Error:      	Received unexpected error:
2026-04-16T00:56:52.0191523Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e032b21ec945fedc7295aa/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:56:52.0192521Z         	Test:       	TestAccStreamRSStreamConnection_cluster
2026-04-16T00:56:52.0194162Z         	Messages:   	Cluster creation failed: test-acc-tf-c-6531355222494240821, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e032b21ec945fedc7295aa/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:56:52.0195238Z --- FAIL: TestAccStreamRSStreamConnection_cluster (0.55s)
```

- 2026-04-17 PASS 8 seconds
- 2026-04-18 PASS 23 minutes
- 2026-04-19: MISSING
- 2026-04-20 PASS 7 seconds
- 2026-04-21 PASS 16 minutes
- 2026-04-22 PASS 7 seconds
- 2026-04-23 PASS 24 minutes
- 2026-04-24 PASS 8 seconds
- 2026-04-25 PASS 14 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 8 seconds
- 2026-04-28 PASS 20 minutes
- 2026-04-29 PASS 10 seconds
- 2026-04-30
  - PASS 18 minutes
  - PASS 12 minutes
- 2026-05-01 PASS 8 seconds
- 2026-05-02 PASS 12 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 9 seconds
- 2026-05-05 PASS 26 minutes
- 2026-05-06 PASS 9 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 8 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 12 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 8 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22
  - PASS 8 seconds
  - PASS 8 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 9 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 9 seconds
- 2026-05-04
  - PASS 9 seconds
  - PASS 8 seconds
- 2026-05-05 PASS 9 seconds
- 2026-05-06 PASS 8 seconds
