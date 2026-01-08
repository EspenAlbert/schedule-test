# ldap/ldapverify/TestMigLDAPVerify_basic Test Details
# Found 18 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 17) FAIL
Success rate: 94.44%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:46](#error-2026-01-07t0046410000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da928d59b8466ea71af12/clusters/test-acc-tf-c-2742252259619607003 | dev | flaky_500 | 245.01s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 13 minutes
  - PASS 13 minutes
- 2025-12-11: MISSING
- 2025-12-12 PASS 14 minutes
- 2025-12-13: MISSING
- 2025-12-14: MISSING
- 2025-12-15 PASS 13 minutes
- 2025-12-16: MISSING
- 2025-12-17 PASS 13 minutes
- 2025-12-18: MISSING
- 2025-12-19 PASS 14 minutes
- 2025-12-20: MISSING
- 2025-12-21: MISSING
- 2025-12-22 PASS 14 minutes
- 2025-12-23: MISSING
- 2025-12-24 PASS 15 minutes
- 2025-12-25: MISSING
- 2025-12-26 PASS 14 minutes
- 2025-12-27: MISSING
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31 PASS 15 minutes
- 2026-01-01: MISSING
- 2026-01-02 PASS 14 minutes
- 2026-01-03: MISSING
- 2026-01-04: MISSING
- 2026-01-05 PASS 12 minutes
- 2026-01-06: MISSING
- 2026-01-07

### Error 2026-01-07T00:46:41+00:00
```
2026-01-07T00:46:41.9003456Z === RUN   TestMigLDAPVerify_basic
2026-01-07T00:46:41.9006399Z     resource_ldap_verify_migration_test.go:10: Creating execution project (1): test-acc-tf-p-8148932404206532394
2026-01-07T00:46:41.9008020Z     resource_ldap_verify_migration_test.go:10: Creating execution cluster: test-acc-tf-c-2742252259619607003
2026-01-07T00:46:41.9009095Z 2026/01/07 00:30:37 [DEBUG] Waiting for state to become: [IDLE]
2026-01-07T00:46:41.9009889Z 2026/01/07 00:33:37 [TRACE] Waiting 1m0s before next try
2026-01-07T00:46:41.9010716Z     resource_ldap_verify_migration_test.go:10: 
2026-01-07T00:46:41.9012626Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2026-01-07T00:46:41.9016174Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:181
2026-01-07T00:46:41.9019893Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapverify/resource_ldap_verify_test.go:68
2026-01-07T00:46:41.9023733Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapverify/resource_ldap_verify_migration_test.go:10
2026-01-07T00:46:41.9025471Z         	Error:      	Received unexpected error:
2026-01-07T00:46:41.9029974Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da928d59b8466ea71af12/clusters/test-acc-tf-c-2742252259619607003 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T00:46:41.9032153Z         	Test:       	TestMigLDAPVerify_basic
2026-01-07T00:46:41.9036071Z         	Messages:   	Cluster creation failed: test-acc-tf-c-2742252259619607003, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da928d59b8466ea71af12/clusters/test-acc-tf-c-2742252259619607003 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T00:46:41.9038525Z --- FAIL: TestMigLDAPVerify_basic (245.08s)
```

- 2026-01-08: MISSING

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 12 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 11 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 11 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 11 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 11 minutes
