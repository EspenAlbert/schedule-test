# stream/streamconnection/TestMigStreamRSStreamConnection_cluster Test Details
# Found 19 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 18) FAIL
Success rate: 94.74%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:45](#error-2026-01-07t0045550000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da930d59b8466ea724401/clusters/test-acc-tf-c-5158981232624624423 | dev | flaky_500 | 241.02s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 12 minutes
  - PASS 11 minutes
- 2025-12-11: MISSING
- 2025-12-12 PASS 10 minutes
- 2025-12-13: MISSING
- 2025-12-14: MISSING
- 2025-12-15 PASS 11 minutes
- 2025-12-16: MISSING
- 2025-12-17 PASS 10 minutes
- 2025-12-18: MISSING
- 2025-12-19 PASS 12 minutes
- 2025-12-20: MISSING
- 2025-12-21: MISSING
- 2025-12-22 PASS 12 minutes
- 2025-12-23: MISSING
- 2025-12-24 PASS 11 minutes
- 2025-12-25: MISSING
- 2025-12-26 PASS 11 minutes
- 2025-12-27: MISSING
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31 PASS 11 minutes
- 2026-01-01: MISSING
- 2026-01-02 PASS 10 minutes
- 2026-01-03: MISSING
- 2026-01-04: MISSING
- 2026-01-05 PASS 10 minutes
- 2026-01-06: MISSING
- 2026-01-07

### Error 2026-01-07T00:45:55+00:00
```
2026-01-07T00:45:55.2547226Z === RUN   TestMigStreamRSStreamConnection_cluster
2026-01-07T00:45:55.2548361Z     resource_stream_connection_migration_test.go:17: Creating execution cluster: test-acc-tf-c-5158981232624624423
2026-01-07T00:45:55.2549364Z 2026/01/07 00:30:47 [DEBUG] Waiting for state to become: [IDLE]
2026-01-07T00:45:55.2550082Z 2026/01/07 00:33:47 [TRACE] Waiting 1m0s before next try
2026-01-07T00:45:55.2550880Z     resource_stream_connection_migration_test.go:17: 
2026-01-07T00:45:55.2552733Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2026-01-07T00:45:55.2556355Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:181
2026-01-07T00:45:55.2560187Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:326
2026-01-07T00:45:55.2564627Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_migration_test.go:17
2026-01-07T00:45:55.2566212Z         	Error:      	Received unexpected error:
2026-01-07T00:45:55.2570739Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da930d59b8466ea724401/clusters/test-acc-tf-c-5158981232624624423 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T00:45:55.2573220Z         	Test:       	TestMigStreamRSStreamConnection_cluster
2026-01-07T00:45:55.2577179Z         	Messages:   	Cluster creation failed: test-acc-tf-c-5158981232624624423, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da930d59b8466ea724401/clusters/test-acc-tf-c-5158981232624624423 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T00:45:55.2580148Z --- FAIL: TestMigStreamRSStreamConnection_cluster (241.18s)
```

- 2026-01-08: MISSING

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 8 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 8 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 10 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 8 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08
  - PASS 10 minutes
  - PASS 12 minutes
