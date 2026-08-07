# stream/streamconnection/TestMigStreamRSStreamConnection_cluster Test Details
# Found 20 TestRuns in dev, qa from 2026-07-10 to 2026-08-07 from master branch: 1 unique tests, PASS(x 18) FAIL(x 2)
Success rate: 90.00%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-27 04:52](#error-2026-07-27t0452300000) |  | dev | timeout | 3600.08s
[2026-08-03 01:33](#error-2026-08-03t0133290000) |  | dev |  | 1209.10s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10 PASS 23 minutes
- 2026-07-11: MISSING
- 2026-07-12: MISSING
- 2026-07-13 PASS 12 minutes
- 2026-07-14: MISSING
- 2026-07-15 PASS 13 minutes
- 2026-07-16: MISSING
- 2026-07-17 PASS 15 minutes
- 2026-07-18: MISSING
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22 PASS 15 minutes
- 2026-07-23: MISSING
- 2026-07-24 PASS 21 minutes
- 2026-07-25: MISSING
- 2026-07-26: MISSING
- 2026-07-27

### Error 2026-07-27T04:52:30+00:00
```
2026-07-27T04:52:30.3402120Z === RUN   TestMigStreamRSStreamConnection_cluster
2026-07-27T04:52:30.3403488Z     resource_stream_connection_migration_test.go:17: Creating execution cluster: test-acc-tf-c-4378313189712535016
2026-07-27T04:52:30.3405089Z     resource_stream_connection_migration_test.go:17: 
2026-07-27T04:52:30.3406998Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:49
2026-07-27T04:52:30.3410325Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:194
2026-07-27T04:52:30.3414263Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:332
2026-07-27T04:52:30.3418629Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_migration_test.go:17
2026-07-27T04:52:30.3420247Z         	Error:      	Received unexpected error:
2026-07-27T04:52:30.3422018Z         	            	timeout while waiting for state to become 'IDLE' (last state: 'REPAIRING', timeout: 1h0m0s)
2026-07-27T04:52:30.3423206Z         	Test:       	TestMigStreamRSStreamConnection_cluster
2026-07-27T04:52:30.3425255Z         	Messages:   	Cluster creation failed: test-acc-tf-c-4378313189712535016, err: timeout while waiting for state to become 'IDLE' (last state: 'REPAIRING', timeout: 1h0m0s)
2026-07-27T04:52:30.3426768Z --- FAIL: TestMigStreamRSStreamConnection_cluster (3600.78s)
```

- 2026-07-28: MISSING
- 2026-07-29 PASS 14 minutes
- 2026-07-30: MISSING
- 2026-07-31 PASS 12 minutes
- 2026-08-01: MISSING
- 2026-08-02: MISSING
- 2026-08-03
  - FAIL 20 minutes

### Error 2026-08-03T01:33:29+00:00
```
2026-08-03T01:33:29.9832347Z === RUN   TestMigStreamRSStreamConnection_cluster
2026-08-03T01:33:29.9833783Z     resource_stream_connection_migration_test.go:17: Creating execution cluster: test-acc-tf-c-2149374854383960344
2026-08-03T01:33:29.9835321Z     resource_stream_connection_migration_test.go:17: 
2026-08-03T01:33:29.9837177Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:49
2026-08-03T01:33:29.9839677Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:194
2026-08-03T01:33:29.9843269Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:332
2026-08-03T01:33:29.9846082Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_migration_test.go:17
2026-08-03T01:33:29.9847040Z         	Error:      	Received unexpected error:
2026-08-03T01:33:29.9848927Z         	            	Get "https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a6fe500aa9e3c145b665a3d/clusters/test-acc-tf-c-2149374854383960344": read tcp 10.1.0.165:35334->23.23.86.210:443: read: connection timed out
2026-08-03T01:33:29.9850049Z         	Test:       	TestMigStreamRSStreamConnection_cluster
2026-08-03T01:33:29.9851785Z         	Messages:   	Cluster creation failed: test-acc-tf-c-2149374854383960344, err: Get "https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a6fe500aa9e3c145b665a3d/clusters/test-acc-tf-c-2149374854383960344": read tcp 10.1.0.165:35334->23.23.86.210:443: read: connection timed out
2026-08-03T01:33:29.9853001Z --- FAIL: TestMigStreamRSStreamConnection_cluster (1209.98s)
```

  - PASS 13 minutes
  - PASS 13 minutes
- 2026-08-04: MISSING
- 2026-08-05 PASS 12 minutes
- 2026-08-06: MISSING
- 2026-08-07 PASS 12 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 13 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 13 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 13 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 14 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29 PASS 14 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 12 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
