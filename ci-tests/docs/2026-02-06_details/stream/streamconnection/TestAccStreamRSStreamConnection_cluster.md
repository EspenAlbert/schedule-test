# stream/streamconnection/TestAccStreamRSStreamConnection_cluster Test Details
# Found 34 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 4)
Success rate: 88.24%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 01:39](#error-2026-01-31t0139390000) |  | dev | timeout | 3600.07s
[2026-02-02 03:39](#error-2026-02-02t0339100000) |  | dev | timeout | 3600.07s
[2026-02-03 00:40](#error-2026-02-03t0040330000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143c3b2e54ee99590a04a/clusters | dev | out_of_capacity | 0.05s
[2026-02-03 01:51](#error-2026-02-03t0151060000) | OUT_OF_CAPACITY /api/atlas/v2/groups/6981544b8303bfa55c8217d3/clusters | dev | out_of_capacity | 0.06s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 17 minutes
- 2026-01-09 PASS 5 seconds
- 2026-01-10 PASS 15 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 10 seconds
- 2026-01-13 PASS 14 minutes
- 2026-01-14 PASS 5 seconds
- 2026-01-15 PASS 18 minutes
- 2026-01-16 PASS 5 seconds
- 2026-01-17 PASS 15 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 6 seconds
- 2026-01-20 PASS 15 minutes
- 2026-01-21 PASS 8 seconds
- 2026-01-22 PASS 13 minutes
- 2026-01-23 PASS 6 seconds
- 2026-01-24 PASS 13 minutes
- 2026-01-25: MISSING
- 2026-01-26 PASS 6 seconds
- 2026-01-27 PASS 13 minutes
- 2026-01-28 PASS 6 seconds
- 2026-01-29 PASS 13 minutes
- 2026-01-30: MISSING
- 2026-01-31

### Error 2026-01-31T01:39:39+00:00
```
2026-01-31T01:39:39.8766782Z === RUN   TestAccStreamRSStreamConnection_cluster
2026-01-31T01:39:39.8767718Z     resource_stream_connection_test.go:291: Creating execution cluster: test-acc-tf-c-7458624045544192915
2026-01-31T01:39:39.8768506Z     resource_stream_connection_test.go:291: 
2026-01-31T01:39:39.8769762Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2026-01-31T01:39:39.8771586Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:181
2026-01-31T01:39:39.8773870Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:298
2026-01-31T01:39:39.8776069Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:291
2026-01-31T01:39:39.8777270Z         	Error:      	Received unexpected error:
2026-01-31T01:39:39.8778261Z         	            	timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-01-31T01:39:39.8778931Z         	Test:       	TestAccStreamRSStreamConnection_cluster
2026-01-31T01:39:39.8780067Z         	Messages:   	Cluster creation failed: test-acc-tf-c-7458624045544192915, err: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-01-31T01:39:39.8780869Z --- FAIL: TestAccStreamRSStreamConnection_cluster (3600.73s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T03:39:10+00:00
```
2026-02-02T03:39:10.8538594Z === RUN   TestAccStreamRSStreamConnection_cluster
2026-02-02T03:39:10.8539191Z     resource_stream_connection_test.go:291: Creating execution cluster: test-acc-tf-c-2864121649095805473
2026-02-02T03:39:10.8539714Z     resource_stream_connection_test.go:291: 
2026-02-02T03:39:10.8540562Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2026-02-02T03:39:10.8542116Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:181
2026-02-02T03:39:10.8543967Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:298
2026-02-02T03:39:10.8545914Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:291
2026-02-02T03:39:10.8546876Z         	Error:      	Received unexpected error:
2026-02-02T03:39:10.8547757Z         	            	timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-02-02T03:39:10.8548347Z         	Test:       	TestAccStreamRSStreamConnection_cluster
2026-02-02T03:39:10.8549339Z         	Messages:   	Cluster creation failed: test-acc-tf-c-2864121649095805473, err: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-02-02T03:39:10.8550068Z --- FAIL: TestAccStreamRSStreamConnection_cluster (3600.75s)
```

- 2026-02-03
  - FAIL a moment

### Error 2026-02-03T00:40:33+00:00
```
2026-02-03T00:40:33.6402918Z === RUN   TestAccStreamRSStreamConnection_cluster
2026-02-03T00:40:33.6403605Z     resource_stream_connection_test.go:291: Creating execution cluster: test-acc-tf-c-4792206017306565581
2026-02-03T00:40:33.6404170Z     resource_stream_connection_test.go:291: 
2026-02-03T00:40:33.6405289Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:46
2026-02-03T00:40:33.6407143Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:203
2026-02-03T00:40:33.6409192Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:298
2026-02-03T00:40:33.6411330Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:291
2026-02-03T00:40:33.6412181Z         	Error:      	Received unexpected error:
2026-02-03T00:40:33.6432299Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143c3b2e54ee99590a04a/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:40:33.6433669Z         	Test:       	TestAccStreamRSStreamConnection_cluster
2026-02-03T00:40:33.6436033Z         	Messages:   	Cluster creation failed: test-acc-tf-c-4792206017306565581, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143c3b2e54ee99590a04a/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:40:33.6437473Z --- FAIL: TestAccStreamRSStreamConnection_cluster (0.51s)
```

  - FAIL a moment

### Error 2026-02-03T01:51:06+00:00
```
2026-02-03T01:51:06.0452596Z === RUN   TestAccStreamRSStreamConnection_cluster
2026-02-03T01:51:06.0453788Z     resource_stream_connection_test.go:291: Creating execution cluster: test-acc-tf-c-2530761858921850819
2026-02-03T01:51:06.0454844Z     resource_stream_connection_test.go:291: 
2026-02-03T01:51:06.0456611Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:46
2026-02-03T01:51:06.0459972Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:203
2026-02-03T01:51:06.0464012Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:298
2026-02-03T01:51:06.0468048Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:291
2026-02-03T01:51:06.0469638Z         	Error:      	Received unexpected error:
2026-02-03T01:51:06.0474486Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/6981544b8303bfa55c8217d3/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-02-03T01:51:06.0476855Z         	Test:       	TestAccStreamRSStreamConnection_cluster
2026-02-03T01:51:06.0480864Z         	Messages:   	Cluster creation failed: test-acc-tf-c-2530761858921850819, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6981544b8303bfa55c8217d3/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-02-03T01:51:06.0483659Z --- FAIL: TestAccStreamRSStreamConnection_cluster (0.62s)
```

- 2026-02-04 PASS 7 seconds
- 2026-02-05 PASS 14 minutes
- 2026-02-06 PASS 7 seconds

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08
  - PASS 7 seconds
  - PASS 6 seconds
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 5 seconds
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 5 seconds
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 6 seconds
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 7 seconds
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 7 seconds
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 8 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
