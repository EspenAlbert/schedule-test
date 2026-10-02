# config/organization/TestAccConfigDSOrganization_users Test Details
# Found 39 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 38) FAIL
Success rate: 97.44%

## DEV Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 4 seconds
- 2026-09-03 PASS 5 seconds
- 2026-09-04 PASS 4 seconds
- 2026-09-05 PASS 3 seconds
- 2026-09-06: MISSING
- 2026-09-07 PASS 4 seconds
- 2026-09-08 PASS 3 seconds
- 2026-09-09 PASS 3 seconds
- 2026-09-10
  - PASS 2 seconds
  - PASS 3 seconds
- 2026-09-11
  - PASS 6 seconds
  - PASS 5 seconds
- 2026-09-12 PASS 3 seconds
- 2026-09-13: MISSING
- 2026-09-14 PASS 3 seconds
- 2026-09-15 PASS 4 seconds
- 2026-09-16 PASS 4 seconds
- 2026-09-17 PASS 2 seconds
- 2026-09-18 PASS 3 seconds
- 2026-09-19 PASS 4 seconds
- 2026-09-20: MISSING
- 2026-09-21 PASS 6 seconds
- 2026-09-22 PASS 4 seconds
- 2026-09-23 PASS 3 seconds
- 2026-09-24 PASS 4 seconds
- 2026-09-25 PASS 3 seconds
- 2026-09-26 PASS 3 seconds
- 2026-09-27: MISSING
- 2026-09-28 PASS 3 seconds
- 2026-09-29
  - PASS 3 seconds
  - PASS 3 seconds
  - PASS 3 seconds
- 2026-09-30 PASS 5 seconds
- 2026-10-01 PASS 2 seconds
- 2026-10-02 PASS 4 seconds

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-29 10:45](#error-2026-09-29t1045410000) | RATE_LIMITED_TOKEN_BUCKET /api/atlas/v2/orgs | qa | 4.02s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 4 seconds
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 3 seconds
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 3 seconds
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 3 seconds
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 4 seconds
- 2026-09-28: MISSING
- 2026-09-29
  - PASS 2 seconds
  - FAIL 4 seconds

### Error 2026-09-29T10:45:41+00:00
```
2026-09-29T10:45:41.5065939Z === RUN   TestAccConfigDSOrganization_users
2026-09-29T10:45:41.5068453Z === CONT  TestAccConfigDSOrganization_users
2026-09-29T10:45:41.5083604Z === NAME  TestAccConfigDSOrganization_users
2026-09-29T10:45:41.5084134Z     resource_organization_test.go:369: Step 1/1 error: Error running post-apply refresh plan: exit status 1
2026-09-29T10:45:41.5084544Z         
2026-09-29T10:45:41.5086708Z         Error: error getting organization information: https://cloud-qa.mongodb.com/api/atlas/v2/orgs GET: HTTP 429 Too Many Requests (Error code: "RATE_LIMITED_TOKEN_BUCKET") Detail: Rate limit exceeded for api/atlas/v2/orgs. Please retry after 6 seconds. Request capacity: 300. Refill rate: 100 per 60 seconds. For more information, see: http://dochub.mongodb.org/core/atlas-api-rate-limit. Reason: Too Many Requests. Params: [api/atlas/v2/orgs 6 300 100 60], BadRequestDetail: 
2026-09-29T10:45:41.5087997Z         
2026-09-29T10:45:41.5088308Z           with data.mongodbatlas_organizations.test,
2026-09-29T10:45:41.5088847Z           on terraform_plugin_test.tf line 12, in data "mongodbatlas_organizations" "test":
2026-09-29T10:45:41.5089334Z           12: 		data "mongodbatlas_organizations" "test" {
2026-09-29T10:45:41.5089606Z         
2026-09-29T10:45:41.5090219Z --- FAIL: TestAccConfigDSOrganization_users (4.22s)
```

  - PASS 4 seconds
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
