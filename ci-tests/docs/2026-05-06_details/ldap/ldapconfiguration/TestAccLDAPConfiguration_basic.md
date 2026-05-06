# ldap/ldapconfiguration/TestAccLDAPConfiguration_basic Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 33) FAIL
Success rate: 97.06%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-30 00:57](#error-2026-04-30t0057400000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.09s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 8 seconds
- 2026-04-08 PASS 2 seconds
- 2026-04-09 PASS 5 seconds
- 2026-04-10 PASS 2 seconds
- 2026-04-11 PASS 5 seconds
- 2026-04-12: MISSING
- 2026-04-13 PASS 2 seconds
- 2026-04-14 PASS 7 seconds
- 2026-04-15 PASS 2 seconds
- 2026-04-16 PASS 13 seconds
- 2026-04-17 PASS 2 seconds
- 2026-04-18 PASS 6 seconds
- 2026-04-19: MISSING
- 2026-04-20 PASS 2 seconds
- 2026-04-21 PASS 19 seconds
- 2026-04-22 PASS 3 seconds
- 2026-04-23 PASS 5 seconds
- 2026-04-24 PASS 3 seconds
- 2026-04-25 PASS 6 seconds
- 2026-04-26: MISSING
- 2026-04-27 PASS 2 seconds
- 2026-04-28 PASS 7 seconds
- 2026-04-29 PASS 3 seconds
- 2026-04-30

### Error 2026-04-30T00:57:40+00:00
```
2026-04-30T00:57:40.4584309Z === RUN   TestAccLDAPConfiguration_basic
2026-04-30T00:57:40.4585906Z     resource_ldap_configuration_test.go:22: Creating execution project (1): test-acc-tf-p-6822968764343674805
2026-04-30T00:57:40.4587289Z     resource_ldap_configuration_test.go:22: 
2026-04-30T00:57:40.4589393Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-30T00:57:40.4593966Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-30T00:57:40.4598061Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-30T00:57:40.4602596Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapconfiguration/resource_ldap_configuration_test.go:83
2026-04-30T00:57:40.4607542Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapconfiguration/resource_ldap_configuration_test.go:22
2026-04-30T00:57:40.4610045Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-30T00:57:40.4611100Z         	Error:      	Received unexpected error:
2026-04-30T00:57:40.4615097Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T00:57:40.4617100Z         	Test:       	TestAccLDAPConfiguration_basic
2026-04-30T00:57:40.4620488Z         	Messages:   	Project creation failed: test-acc-tf-p-6822968764343674805, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T00:57:40.4622835Z --- FAIL: TestAccLDAPConfiguration_basic (61.87s)
```

- 2026-05-01 PASS 2 seconds
- 2026-05-02 PASS 5 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 3 seconds
- 2026-05-05 PASS 7 seconds
- 2026-05-06 PASS 3 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 3 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS a second
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS a second
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 2 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 2 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS a second
- 2026-05-04 PASS 2 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 3 seconds
