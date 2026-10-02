# stream/streamconnection/TestMigStreamRSStreamConnection_cluster Test Details
# Found 25 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 24) FAIL
Success rate: 96.00%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-11 03:49](#error-2026-09-11t0349320000) |  | dev | timeout | 3601.01s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 24 minutes
- 2026-09-03: MISSING
- 2026-09-04 PASS 20 minutes
- 2026-09-05: MISSING
- 2026-09-06: MISSING
- 2026-09-07 PASS 14 minutes
- 2026-09-08: MISSING
- 2026-09-09 PASS 14 minutes
- 2026-09-10: MISSING
- 2026-09-11
  - FAIL an hour

### Error 2026-09-11T03:49:32+00:00
```
2026-09-11T03:49:32.5803362Z === RUN   TestMigStreamRSStreamConnection_cluster
2026-09-11T03:49:32.5804090Z     resource_stream_connection_migration_test.go:17: Creating execution cluster: test-acc-tf-c-7216086152877181769
2026-09-11T03:49:32.5804790Z     resource_stream_connection_migration_test.go:17: 
2026-09-11T03:49:32.5805840Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:68
2026-09-11T03:49:32.5807861Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:203
2026-09-11T03:49:32.5809788Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:179
2026-09-11T03:49:32.5812430Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:459
2026-09-11T03:49:32.5815111Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_migration_test.go:17
2026-09-11T03:49:32.5816440Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-09-11T03:49:32.5816908Z         	Error:      	Received unexpected error:
2026-09-11T03:49:32.5818088Z         	            	cluster creation failed: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-09-11T03:49:32.5818732Z         	Test:       	TestMigStreamRSStreamConnection_cluster
2026-09-11T03:49:32.5819254Z         	Messages:   	Cluster creation failed: test-acc-tf-c-7216086152877181769
2026-09-11T03:49:32.5819682Z --- FAIL: TestMigStreamRSStreamConnection_cluster (3601.09s)
```

  - PASS 13 minutes
- 2026-09-12: MISSING
- 2026-09-13: MISSING
- 2026-09-14 PASS 15 minutes
- 2026-09-15: MISSING
- 2026-09-16 PASS 14 minutes
- 2026-09-17: MISSING
- 2026-09-18 PASS 15 minutes
- 2026-09-19: MISSING
- 2026-09-20: MISSING
- 2026-09-21 PASS 13 minutes
- 2026-09-22: MISSING
- 2026-09-23 PASS 14 minutes
- 2026-09-24: MISSING
- 2026-09-25 PASS 13 minutes
- 2026-09-26: MISSING
- 2026-09-27: MISSING
- 2026-09-28 PASS 13 minutes
- 2026-09-29
  - PASS 14 minutes
  - PASS 14 minutes
- 2026-09-30
  - PASS 13 minutes
  - PASS 13 minutes
  - PASS 13 minutes
- 2026-10-01: MISSING
- 2026-10-02 PASS 15 minutes

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 13 minutes
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 14 minutes
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 14 minutes
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 13 minutes
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 17 minutes
- 2026-09-28: MISSING
- 2026-09-29 PASS 14 minutes
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
