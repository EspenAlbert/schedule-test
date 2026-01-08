# ldap/ldapverify/TestAccLDAPVerify_basic Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:46](#error-2026-01-07t0046410000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da928d59b8466ea71af12/clusters/test-acc-tf-c-1347011146590957661 | dev | flaky_500 | 241.04s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-12-11 PASS 14 minutes
- 2025-12-12 PASS 3 minutes
- 2025-12-13 PASS 12 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 3 minutes
- 2025-12-16 PASS 11 minutes
- 2025-12-17 PASS 3 minutes
- 2025-12-18 PASS 16 minutes
- 2025-12-19 PASS 3 minutes
- 2025-12-20 PASS 14 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 3 minutes
- 2025-12-23 PASS 14 minutes
- 2025-12-24 PASS 3 minutes
- 2025-12-25 PASS 15 minutes
- 2025-12-26 PASS 3 minutes
- 2025-12-27 PASS 14 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 13 minutes
- 2025-12-31 PASS 3 minutes
- 2026-01-01 PASS 13 minutes
- 2026-01-02 PASS 3 minutes
- 2026-01-03 PASS 13 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 3 minutes
- 2026-01-06 PASS 11 minutes
- 2026-01-07

### Error 2026-01-07T00:46:41+00:00
```
2026-01-07T00:46:41.9039173Z === RUN   TestAccLDAPVerify_basic
2026-01-07T00:46:41.9040257Z     resource_ldap_verify_test.go:22: Creating execution cluster: test-acc-tf-c-1347011146590957661
2026-01-07T00:46:41.9041264Z 2026/01/07 00:34:38 [DEBUG] Waiting for state to become: [IDLE]
2026-01-07T00:46:41.9042037Z 2026/01/07 00:37:38 [TRACE] Waiting 1m0s before next try
2026-01-07T00:46:41.9042818Z     resource_ldap_verify_test.go:22: 
2026-01-07T00:46:41.9044701Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2026-01-07T00:46:41.9048248Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:181
2026-01-07T00:46:41.9051795Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapverify/resource_ldap_verify_test.go:68
2026-01-07T00:46:41.9055825Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapverify/resource_ldap_verify_test.go:22
2026-01-07T00:46:41.9057340Z         	Error:      	Received unexpected error:
2026-01-07T00:46:41.9061837Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da928d59b8466ea71af12/clusters/test-acc-tf-c-1347011146590957661 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T00:46:41.9064150Z         	Test:       	TestAccLDAPVerify_basic
2026-01-07T00:46:41.9067908Z         	Messages:   	Cluster creation failed: test-acc-tf-c-1347011146590957661, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da928d59b8466ea71af12/clusters/test-acc-tf-c-1347011146590957661 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T00:46:41.9070321Z --- FAIL: TestAccLDAPVerify_basic (241.42s)
```

- 2026-01-08 PASS 15 minutes

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 3 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 3 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 3 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 3 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 3 minutes
