# ldap/ldapconfiguration/TestAccLDAPConfiguration_basic Test Details
# Found 32 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-02-19 00:39](#error-2026-02-19t0039250000) |  | dev | 0.10s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 3 seconds
- 2026-01-27 PASS 7 seconds
- 2026-01-28 PASS 3 seconds
- 2026-01-29 PASS 6 seconds
- 2026-01-30 PASS 2 seconds
- 2026-01-31 PASS 11 seconds
- 2026-02-01: MISSING
- 2026-02-02 PASS 2 seconds
- 2026-02-03 PASS 4 seconds
- 2026-02-04 PASS 3 seconds
- 2026-02-05 PASS 7 seconds
- 2026-02-06 PASS 3 seconds
- 2026-02-07 PASS 10 seconds
- 2026-02-08: MISSING
- 2026-02-09 PASS 2 seconds
- 2026-02-10 PASS 5 seconds
- 2026-02-11 PASS 2 seconds
- 2026-02-12 PASS 5 seconds
- 2026-02-13 PASS 2 seconds
- 2026-02-14 PASS 7 seconds
- 2026-02-15: MISSING
- 2026-02-16 PASS 2 seconds
- 2026-02-17 PASS 6 seconds
- 2026-02-18 PASS 2 seconds
- 2026-02-19

### Error 2026-02-19T00:39:25+00:00
```
2026-02-19T00:39:25.1509562Z === RUN   TestAccLDAPConfiguration_basic
2026-02-19T00:39:25.1510567Z     resource_ldap_configuration_test.go:22: Creating execution project (1): test-acc-tf-p-8256963009836340228
2026-02-19T00:39:25.1513370Z     resource_ldap_configuration_test.go:22: 
2026-02-19T00:39:25.1514917Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-02-19T00:39:25.1517721Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-02-19T00:39:25.1521282Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-02-19T00:39:25.1524191Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapconfiguration/resource_ldap_configuration_test.go:83
2026-02-19T00:39:25.1527981Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapconfiguration/resource_ldap_configuration_test.go:22
2026-02-19T00:39:25.1530506Z         	            				/opt/hostedtoolcache/go/1.25.7/x64/src/runtime/asm_amd64.s:1693
2026-02-19T00:39:25.1531511Z         	Error:      	Received unexpected error:
2026-02-19T00:39:25.1532942Z         	            	Post "https://cloud-dev.mongodb.com/api/atlas/v2/groups": EOF
2026-02-19T00:39:25.1533976Z         	Test:       	TestAccLDAPConfiguration_basic
2026-02-19T00:39:25.1535740Z         	Messages:   	Project creation failed: test-acc-tf-p-8256963009836340228, err: Post "https://cloud-dev.mongodb.com/api/atlas/v2/groups": EOF
2026-02-19T00:39:25.1537065Z --- FAIL: TestAccLDAPConfiguration_basic (0.98s)
```

- 2026-02-20 PASS 3 seconds
- 2026-02-21 PASS 6 seconds
- 2026-02-22: MISSING
- 2026-02-23 PASS 3 seconds
- 2026-02-24 PASS 8 seconds

## QA Environment
### Timeline
- 2026-01-25: MISSING
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS a second
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 2 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS a second
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS a second
- 2026-02-16: MISSING
- 2026-02-17 PASS 2 seconds
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 2 seconds
- 2026-02-23: MISSING
- 2026-02-24: MISSING
