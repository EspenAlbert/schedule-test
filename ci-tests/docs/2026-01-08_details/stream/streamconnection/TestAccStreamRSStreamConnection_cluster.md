# stream/streamconnection/TestAccStreamRSStreamConnection_cluster Test Details
# Found 32 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:45](#error-2026-01-07t0045550000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da930d59b8466ea724401/clusters/test-acc-tf-c-5526733409055358615 | dev | flaky_500 | 241.01s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 5 seconds
  - PASS 7 seconds
- 2025-12-11 PASS 11 minutes
- 2025-12-12 PASS 7 seconds
- 2025-12-13 PASS 12 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 5 seconds
- 2025-12-16 PASS 10 minutes
- 2025-12-17 PASS 6 seconds
- 2025-12-18 PASS 12 minutes
- 2025-12-19 PASS 5 seconds
- 2025-12-20 PASS 12 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 6 seconds
- 2025-12-23 PASS 13 minutes
- 2025-12-24 PASS 5 seconds
- 2025-12-25 PASS 19 minutes
- 2025-12-26 PASS 5 seconds
- 2025-12-27 PASS 12 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 13 minutes
- 2025-12-31 PASS 4 seconds
- 2026-01-01 PASS 11 minutes
- 2026-01-02 PASS 4 seconds
- 2026-01-03 PASS 11 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 6 seconds
- 2026-01-06 PASS 13 minutes
- 2026-01-07

### Error 2026-01-07T00:45:55+00:00
```
2026-01-07T00:45:55.2587534Z === RUN   TestAccStreamRSStreamConnection_cluster
2026-01-07T00:45:55.2588725Z     resource_stream_connection_test.go:290: Creating execution cluster: test-acc-tf-c-5526733409055358615
2026-01-07T00:45:55.2589745Z     resource_stream_connection_test.go:290: 
2026-01-07T00:45:55.2591497Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2026-01-07T00:45:55.2595038Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:181
2026-01-07T00:45:55.2598928Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:297
2026-01-07T00:45:55.2601660Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:290
2026-01-07T00:45:55.2602540Z         	Error:      	Received unexpected error:
2026-01-07T00:45:55.2605199Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da930d59b8466ea724401/clusters/test-acc-tf-c-5526733409055358615 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T00:45:55.2606451Z         	Test:       	TestAccStreamRSStreamConnection_cluster
2026-01-07T00:45:55.2608483Z         	Messages:   	Cluster creation failed: test-acc-tf-c-5526733409055358615, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da930d59b8466ea724401/clusters/test-acc-tf-c-5526733409055358615 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T00:45:55.2609841Z --- FAIL: TestAccStreamRSStreamConnection_cluster (241.13s)
```

- 2026-01-08 PASS 17 minutes

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 5 seconds
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 5 seconds
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 7 seconds
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 5 seconds
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08
  - PASS 7 seconds
  - PASS 6 seconds
